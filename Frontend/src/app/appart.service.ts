import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Appart } from './Appart';
import { Prix } from './Prix';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppartService {

  constructor(private http: HttpClient) { }
  public predict(appart: Appart): Observable<Prix> {
    return this.http.post<Prix>(`api/predict`, appart);
  }
}
