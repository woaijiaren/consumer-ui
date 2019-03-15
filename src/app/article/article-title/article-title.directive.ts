import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Directive({
  selector: '[appArticleTitle]',
})
export class ArticleTitleDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef<HTMLElement>, private title: Title) {
  }

  ngAfterViewInit(): void {
    const title = this.elementRef.nativeElement.querySelector('h1');
    this.title.setTitle([title.textContent, '我爱家人网'].join(' - '));
  }
}
