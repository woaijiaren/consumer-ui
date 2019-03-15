import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetTitleGuard } from './core/guard/set-title.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [SetTitleGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'requests',
      },
      {
        path: 'requests',
        loadChildren: './request/request.module#RequestModule',
      },
      {
        path: 'orders',
        loadChildren: './order/order.module#OrderModule',
      },
      {
        path: 'services',
        loadChildren: './service/service.module#ServiceModule',
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
      },
      {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
