import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderFormModel } from '../../shared/models/order-form.model';

@Injectable({
  providedIn: 'root',
})
export class OrderFormApi {

  constructor(private http: HttpClient) {
  }

  query(): Observable<OrderFormModel[]> {
    return this.http.get<OrderFormModel[]>('/api/order-forms');
  }
}
