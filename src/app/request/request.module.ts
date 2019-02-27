import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestCreateComponent } from './create/request-create.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RequestCreateComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class RequestModule {
}
