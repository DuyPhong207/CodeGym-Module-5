import { Injectable } from '@angular/core';
import {Customer} from '../../model/Customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  addCustomer(even: any): Observable<any> {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', even);
  }
  editCustomer(customer: any): Observable<any> {
    return this.httpClient.patch<Customer>('http://localhost:3000/customers/' + customer.id, customer);
  }
  deleteCustomer(id: any): Observable<any> {
    return this.httpClient.delete<Customer>('http://localhost:3000/customers/' + id);
  }

  findById(id: any): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/' + id);
  }
  findByName(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers?name_like=' + name);
  }
  findByTypeName(typeName: string): Observable<Customer[]> {
    if (typeName === 'none') {
      return this.findAll();
    } else {
      return this.httpClient.get<Customer[]>('http://localhost:3000/customers?customerType.name=' + typeName);
    }
  }
  findByYearOfBirth(year: string): Observable<Customer[]> {
    const fromDate: string = year + '-01-01';
    const endDate: string = year + '-12-31';
    if (year === 'none') {
      return this.findAll();
    } else {
      return this.httpClient.get<Customer[]>('http://localhost:3000/customers?dateOfBirth_gte=' + fromDate + '&dateOfBirth_lte=' +
        endDate);
    }
  }
}
