import {Customer} from './Customer';
import {Employee} from './Employee';
import {Facility} from './Facility';

export interface Contract {
  id: number;
  customer: Customer;
  employee: Employee;
  facility: Facility;
  dayStart: string;
  dayEnd: string;
  deposit: number;
  totalPay: number;
}
