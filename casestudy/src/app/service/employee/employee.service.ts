import { Injectable } from '@angular/core';
import {Employee} from '../../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() { }
  findAll(): Employee[] {
    return this.employees;
  }

  addEmployee(value: any) {
    this.employees.push(value);
  }
}
