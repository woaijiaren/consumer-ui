import { Component, OnInit } from '@angular/core';
import { ArticleApi } from '../api/article-api.service';
import { ArticleModel } from '../api/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {

  items: ArticleModel[] = [];

  constructor(private api: ArticleApi) {
  }

  ngOnInit() {
    this.api.query().subscribe(items => this.items = items);
  }

}
