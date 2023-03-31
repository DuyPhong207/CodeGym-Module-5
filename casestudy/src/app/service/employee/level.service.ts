import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../../model/Division';
import {Level} from '../../model/Level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Level[]> {
    return this.httpClient.get<Level[]>('http://localhost:3000/levels');
  }
}
