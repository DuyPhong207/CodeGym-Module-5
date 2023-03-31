import { Injectable } from '@angular/core';
import {Contract} from '../../model/Contract';
import {CustomerService} from '../customer/customer.service';
import {EmployeeService} from '../employee/employee.service';
import {FacilityService} from '../facility/facility.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/Employee';
import {Customer} from '../../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [];
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>('http://localhost:3000/contracts');
  }
  addContract(value: any): Observable<any> {
    return this.httpClient.post<Contract>('http://localhost:3000/contracts', value);
  }

  editContract(contract: any): Observable<any> {
    return this.httpClient.patch<Contract>('http://localhost:3000/contracts/' + contract.id, contract);
  }

  findById(id: any): Observable<Contract> {
    return this.httpClient.get<Contract>('http://localhost:3000/contracts/' + id);
  }
  deleteContract(id: any): Observable<Contract> {
    return this.httpClient.delete<Contract>('http://localhost:3000/contracts/' + id);
  }
}
