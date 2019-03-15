import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './list/order-list.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: OrderListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {
}
