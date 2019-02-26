import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestCreateComponent } from './create/request-create.component';

@NgModule({
  declarations: [RequestCreateComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
  ],
})
export class RequestModule {
}
