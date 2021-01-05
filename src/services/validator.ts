import {HttpErrors} from '@loopback/rest';
import * as isEmail from 'isemail';
import {Credentials} from '../repositories/user.repository';

export function validateCredentials(credentials: Credentials){
  if(!isEmail.validate(credentials.email)){
    throw new HttpErrors.UnprocessableEntity('Invalid Email');
  }
  if(credentials.password.length < 8){
    throw new HttpErrors.UnprocessableEntity('Password length is less than 8 characters! Re-Enter Password');
  }

}
