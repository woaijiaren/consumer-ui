import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './create/request-create.component';
import { RequestListComponent } from './list/request-list.component';
import { RequestHomeComponent } from './home/request-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RequestHomeComponent,
  },
  {
    path: 'create',
    component: RequestCreateComponent,
  },
  {
    path: 'list',
    component: RequestListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {
}
