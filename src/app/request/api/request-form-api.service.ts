import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestFormModel } from '../../shared/models/request-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestFormApi {

  constructor(private http: HttpClient) {
  }

  create(form: RequestFormModel): Observable<RequestFormModel> {
    return this.http.post<RequestFormModel>('/api/request-forms', form);
  }

  query(): Observable<RequestFormModel[]> {
    return this.http.get<RequestFormModel[]>('/api/request-forms');
  }
}
