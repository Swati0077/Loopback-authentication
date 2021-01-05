import {
  createStubInstance,
  expect,
  StubbedInstanceWithSinonAccessor
} from '@loopback/testlab';
import {CustomerController} from '../../../controllers';
import {Customer} from '../../../models';
import {CustomerRepository} from '../../../repositories';

describe('CustomerController (unit)', () => {
  let repository: StubbedInstanceWithSinonAccessor<CustomerRepository>;
  beforeEach(givenStubbedRepository);

  describe('Count Customers', () => {
    it('retrieves count of  Customers', async () => {
      const controller = new CustomerController(repository);
      repository.stubs.count.resolves({count:5});

      const details = await controller.count();

      expect(details).to.containEql({count:5});

    });
  });
  describe('find Function', () => {
    it('retrieves details of All Customers', async () => {
      const controller = new CustomerController(repository);
      repository.stubs.find.resolves([]);

      const details = await controller.find();

      expect(details).to.be.an.Array

    });
  });

  describe('findById Function', () => {
    it('retrieves details of a Customer By Id', async () => {
      const controller = new CustomerController(repository);
      let obj:Customer;
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.findById.resolves(obj)
      const details = await controller.findById(2);

      expect(details.id).to.be.equal(2)
      expect(details.name).to.be.equal('SACHIN')
      expect(details.website).to.be.equal('www.hh.com')
      expect(details.address).to.be.equal('987 Sector9 Chandigarh')
    });
  });

  describe(' replaceById function', () => {
    it('replace details  of an specific customer', async () => {
      const controller = new CustomerController(repository);
      let obj : Customer;
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.replaceById.resolves();

      const details = await controller.replaceById(2,obj);

      expect(details).to.be.an.Object
    });
  });

  describe('DeleteById Function', () => {
    it('deletes details of a Customer By Id', async () => {
      const controller = new CustomerController(repository);

      let obj:Customer
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.findById.resolves(obj);

      const details = await controller.deleteById(2);

      expect(details).to.be.empty;
    });
  });
  describe('create Function', () => {
    it('posts customer details', async () => {
      const controller = new CustomerController(repository);

      let obj:Customer
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.create.resolves(obj);

      const details = await controller.create(obj);

      expect(details).to.containEql({id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2});
    });
  });

  describe('updatebyid', () => {
    it('update customer by id', async () => {
      const controller = new CustomerController(repository);

      let obj , obj1:Customer;
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      obj1={id:2,name:"ZACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.updateById.resolves();

      const details = await controller.updateById(2,obj);

      expect(details).to.be.Object;
  });

  });
  describe('updateAll', () => {
    it('update ALL', async () => {
      const controller = new CustomerController(repository);

      let obj:Customer
      obj={id:2,name:"SACHIN",website:"www.hh.com",address:"987 Sector9 Chandigarh",users:[],getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      // obj1={firstName:"Rahul",middleName:"RAMESH",lastName:"TENDULKER",email:"TENDULKER@GMAIL.COM",phoneNumber:"+100045623654",role:"CRICKETER",Address:"NEW MUMBAI",customerId:2,getId:()=>2,getIdObject:()=>2,toJSON:()=>2,toObject:()=>2}
      repository.stubs.updateAll.resolves();

      const details = await controller.updateAll(obj);

      expect(details).to.be.an.Object;
  });

  });
  function givenStubbedRepository() {
    repository = createStubInstance(CustomerRepository);
  }
});
