import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleTitleDirective } from './article-title/article-title.directive';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleShowComponent,
    ArticleTitleDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
    MaterialModule,
  ],
})
export class ArticleModule {
}
