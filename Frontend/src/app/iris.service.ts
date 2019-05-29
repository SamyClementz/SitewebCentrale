import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Iris } from './Iris';
import { Espece } from './Espece';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IrisService {

  constructor(private http: HttpClient) { }
  public predict(iris: Iris): Observable<Espece> {
    return this.http.post<Espece>(`api/predict`, iris);
  }
}
