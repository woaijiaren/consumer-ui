import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: ':id/show',
        component: ArticleShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {
}
