import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../../model/Division';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Division[]> {
    return this.httpClient.get<Division[]>('http://localhost:3000/positions');
  }
}
