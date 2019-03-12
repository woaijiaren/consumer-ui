import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleShowComponent } from './article-show/article-show.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleShowComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ],
})
export class ArticleModule {
}
