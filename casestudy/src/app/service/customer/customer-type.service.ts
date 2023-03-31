import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../model/Customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customerType');
  }
}
