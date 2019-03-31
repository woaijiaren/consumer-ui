import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel } from '../../shared/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleApi {

  constructor(private http: HttpClient) {
  }

  query(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>('/api/articles');
  }

  get(id: string): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(`/api/articles/${id}`);
  }
}
