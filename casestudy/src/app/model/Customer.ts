import {CustomerType} from './CustomerType';

export interface Customer {
  id: number;
  customerType: CustomerType;
  name: string;
  dateOfBirth: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
}
