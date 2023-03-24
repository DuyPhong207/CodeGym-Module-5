import { Injectable } from '@angular/core';
import {Customer} from '../../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  constructor() {
    this.customers.push({id: 1, typeId: 1, name: 'Phong', dateOfBirth: '20-01-2001',
      idCard: '123456789', phone: '0123456789', email: '1234@gmail.com', address: 'Da Nang'});
    this.customers.push({id: 2, typeId: 3, name: 'Phong', dateOfBirth: '20-01-2001',
      idCard: '123456789', phone: '0123456789', email: '1234@gmail.com', address: 'Da Nang'});
    this.customers.push({id: 3, typeId: 2, name: 'Phong', dateOfBirth: '20-01-2001',
      idCard: '123456789', phone: '0123456789', email: '1234@gmail.com', address: 'Da Nang'});
    this.customers.push({id: 4, typeId: 2, name: 'Phong', dateOfBirth: '20-01-2001',
      idCard: '123456789', phone: '0123456789', email: '1234@gmail.com', address: 'Da Nang'});
    this.customers.push({id: 5, typeId: 1, name: 'Phong', dateOfBirth: '20-01-2001',
      idCard: '123456789', phone: '0123456789', email: '1234@gmail.com', address: 'Da Nang'});
  }
  findAll(): Customer[] {
    return this.customers;
  }

  addCustomer(even: any) {
    this.customers.push(even);
  }

  findById(value: number): Customer {
    return this.customers.filter(customer => customer.id === value)[0];
  }
}
