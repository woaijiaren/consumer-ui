import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApi {

  constructor(private http: HttpClient) {
  }

  get(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`/api/users/${id}`);
  }

  me(): Observable<UserModel> {
    return this.get('me');
  }
}
