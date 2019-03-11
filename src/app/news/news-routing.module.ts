import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsShowComponent } from './news-show/news-show.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: ':id/show',
    component: NewsShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
