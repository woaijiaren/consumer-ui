import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsShowComponent } from './news-show/news-show.component';

@NgModule({
  declarations: [NewsListComponent, NewsShowComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {
}
