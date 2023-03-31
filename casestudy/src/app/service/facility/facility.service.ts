import { Injectable } from '@angular/core';
import {Facility} from '../../model/Facility';
import {Customer} from '../../model/Customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facilities');
  }
  addFacility(value: Facility): Observable<any> {
    return this.httpClient.post<Customer>('http://localhost:3000/facilities', value);
  }

  deleteFacility(id: any): Observable<any> {
    return this.httpClient.delete<Facility>('http://localhost:3000/facilities/' + id);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>('http://localhost:3000/facilities/' + id);
  }

  editFacility(value: Facility): Observable<any> {
    return this.httpClient.patch<Facility>('http://localhost:3000/facilities/' + value.id, value);
  }
}
