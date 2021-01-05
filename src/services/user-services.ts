import {UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {BcryptHasher} from './hash.password.bcrypt';

export class MyUserService implements UserService<User,Credentials>{
  constructor(
    @repository(UserRepository)
    public userRepository :UserRepository,
    @inject('service.hasher')
    public hasher :BcryptHasher
  ){}
  async verifyCredentials(credentials: Credentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where:{
        email:credentials.email
      }
    })
    if(!foundUser){
      throw new HttpErrors.NotFound('user  not found with this  email')
    }
    const passwordMatched = await this.hasher.comparePassword(credentials.password,foundUser.password)

    if(!passwordMatched){
      throw new HttpErrors.Unauthorized('password not valid')

    }
    return foundUser
  }
  convertToUserProfile(user: User): any {
    //throw new Error('Method not implemented.');
    let username=''
    if(user.firstName){
      username = user.firstName
    }
    if(user.lastName){
      username = user.firstName?`${user.firstName} ${user.lastName}`:user.lastName
    }
return {id: user.id , name: username}
  }


}
