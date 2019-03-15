import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './create/request-create.component';
import { RequestListComponent } from './list/request-list.component';
import { RequestHomeComponent } from './home/request-home.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RequestHomeComponent,
      },
      {
        path: 'create',
        component: RequestCreateComponent,
        data: {
          title: '新预约',
        },
      },
      {
        path: 'list',
        component: RequestListComponent,
        data: {
          title: '预约列表',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {
}
