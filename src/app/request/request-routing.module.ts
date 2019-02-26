import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './create/request-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create',
  },
  {
    path: 'create',
    component: RequestCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {
}
