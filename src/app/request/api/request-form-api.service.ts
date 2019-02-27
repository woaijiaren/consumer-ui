import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestForm } from '../models/request-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestFormApi {

  constructor(private http: HttpClient) {
  }

  create(form: RequestForm): Observable<RequestForm> {
    return this.http.post<RequestForm>('/api/request-forms', form);
  }

  query(): Observable<RequestForm[]> {
    return this.http.get<RequestForm[]>('/api/request-forms');
  }
}
