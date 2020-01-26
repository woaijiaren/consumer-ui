import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetTitleGuard } from './core/guard/set-title.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [SetTitleGuard],
    data: {
      title: '我爱家人网',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'requests',
      },
      {
        path: 'requests',
        loadChildren: () => import('./request/request.module').then(m => m.RequestModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      },
      {
        path: 'services',
        loadChildren: () => import('./service/service.module').then(m => m.ServiceModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'articles',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
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
