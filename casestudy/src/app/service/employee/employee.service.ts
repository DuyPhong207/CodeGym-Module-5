import { Injectable } from '@angular/core';
import {Employee} from '../../model/Employee';
import {Observable} from 'rxjs';
import {Customer} from '../../model/Customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }
  addEmployee(value: any): Observable<any> {
    return this.httpClient.post<Employee>('http://localhost:3000/employees', value);
  }
}
