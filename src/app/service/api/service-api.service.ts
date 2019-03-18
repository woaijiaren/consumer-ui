import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceModel } from '../../shared/models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceApi {

  constructor(private http: HttpClient) {
  }

  query(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>('/api/services');
  }

  get(id: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(`/api/services/${id}`);
  }
}
