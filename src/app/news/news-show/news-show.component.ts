import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare function require(path: string): string;

@Component({
  selector: 'app-news-show',
  templateUrl: './news-show.component.html',
  styleUrls: ['./news-show.component.scss'],
})
export class NewsShowComponent implements OnInit {

  news: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.news = this.sanitizer.bypassSecurityTrustHtml(require('!!html-loader!markdown-loader!../data/news.md'));
  }

}
