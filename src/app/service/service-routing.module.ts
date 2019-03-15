import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './list/service-list.component';
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
        component: ServiceListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {
}
