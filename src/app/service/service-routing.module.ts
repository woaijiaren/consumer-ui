import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './list/service-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: ServiceListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {
}
