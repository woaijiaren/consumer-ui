import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleApi } from '../api/article-api.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { ArticleModel } from '../api/article.model';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.scss'],
})
export class ArticleShowComponent implements OnInit {

  article: ArticleModel;

  @ViewChild('viewer')
  constructor(private api: ArticleApi, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.api.get(id)),
      tap(article => this.article = article),
    ).subscribe();
  }
}
