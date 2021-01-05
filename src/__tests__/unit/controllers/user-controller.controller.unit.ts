// import {UserControllerController} from '../../../controllers';
// import {User, UserRelations} from '../../../models';
// import {UserRepository} from '../../../repositories';

// describe('UserController (unit)', () => {
//   let repository: StubbedInstanceWithSinonAccessor<UserRepository>;
//   beforeEach(givenStubbedRepository);

//   describe('Count Function', () => {
//     it('retrieves count of  Users', async () => {
//       const controller = new UserControllerController(repository);
//       repository.stubs.count.resolves({count:3});

//       const details = await controller.count();

//       expect(details).to.containEql({count:3});

//     });
//   });


//   describe('find Function', () => {
//     it('retrieves details of All Users', async () => {
//       const controller = new UserControllerController(repository);
//       repository.stubs.find.resolves([]);

//       const details = await controller.find();

//       expect(details).to.be.an.Array

//     });
//   });

//   describe('findById Function', () => {
//     it('retrieves details of a User By Id', async () => {
//       const controller = new UserControllerController(repository);
//       // repository.stubs.findById.returns(new Promise((resolve,reject)=>{
//       //   resolve({id:2,firstname:"SACHIN",middlename:"RAMESH",lastname:"TENDULKER",email:"TENDULKER@GMAIL.COM",phonenumber:"+100045623654",role:"CRICKETER",address:"NEW MUMBAI",customerId:2})
//       // }))
//       let obj:User & UserRelations
//       obj={id:2,firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//        repository.stubs.findById.resolves(obj)
//       const details = await controller.findById(2);

//       expect(details.id).to.be.equal(2)
//       expect(details.firstName).to.be.equal('SACHIN')
//       expect(details.middleName).to.be.equal('RAMESH')
//       expect(details.lastName).to.be.equal('TENDULKER')
//     });
//   });

//   describe(' replaceById function of user controller', () => {
//     it('replace details  of an specific user', async () => {
//       const controller = new UserControllerController(repository);
//       let user={firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKAR",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}

//       repository.stubs.replaceById.resolves();

//       const details = await controller.replaceById(2,user);

//       expect(details).to.be.an.Object
//     });
//   });

//   describe('DeleteById Function', () => {
//     it('deletes details of a User By Id', async () => {
//       const controller = new UserControllerController(repository);

//       let obj:User & UserRelations
//       obj={id:2,firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//        repository.stubs.findById.resolves(obj);

//       const details = await controller.deleteById(2);

//       expect(details).to.be.empty;
//     });
//   });
//   describe('create Function', () => {
//     it('posts user details', async () => {
//       const controller = new UserControllerController(repository);

//       let obj:User & UserRelations
//       obj={id:69,firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//        repository.stubs.create.resolves(obj);

//       const details = await controller.create(obj);

//       expect(details).to.containEql({id:69,firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2});
//     });
//   });

//   describe('updatebyid', () => {
//     it('update user by id', async () => {
//       const controller = new UserControllerController(repository);

//       let obj:User
//       obj={firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//       // obj1={firstName:"Rahul",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//       repository.stubs.updateById.resolves();

//       const details = await controller.updateById(2,obj);

//       expect(details).to.be.an.Object;
//   });

//   });
//   describe('updateAll', () => {
//     it('update ALL', async () => {
//       const controller = new UserControllerController(repository);

//       let obj:User
//       obj={firstName:"SACHIN",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//       // obj1={firstName:"Rahul",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
//       repository.stubs.updateAll.resolves();

//       const details = await controller.updateAll(obj);

//       expect(details).to.be.an.Object;
//   });

//   });

//   function givenStubbedRepository() {
//     repository = createStubInstance(UserRepository);
//   }

// });



