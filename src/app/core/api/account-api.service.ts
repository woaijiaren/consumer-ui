import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../../shared/models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountApi {

  constructor(private http: HttpClient) {
  }

  query(userId: string): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>(`/api/account`, { params: { userId } });
  }
}
