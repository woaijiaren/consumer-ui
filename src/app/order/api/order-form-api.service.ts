import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderForm } from '../../shared/models/order-form';

@Injectable({
  providedIn: 'root',
})
export class OrderFormApi {

  constructor(private http: HttpClient) {
  }

  query(): Observable<OrderForm[]> {
    return this.http.get<OrderForm[]>('/api/order-forms');
  }
}
