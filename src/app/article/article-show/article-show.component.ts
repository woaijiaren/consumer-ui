import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.scss'],
})
export class ArticleShowComponent implements OnInit {

  article: SafeHtml;

  constructor() {
  }

  ngOnInit() {
  }

}
