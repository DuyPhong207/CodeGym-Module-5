import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/Customer';
import {RentType} from '../../model/RentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>('http://localhost:3000/rentType');
  }
}
