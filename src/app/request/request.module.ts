import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestCreateComponent } from './create/request-create.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestListComponent } from './list/request-list.component';
import { RequestHomeComponent } from './home/request-home.component';
import { RequestItemComponent } from './item/request-item.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    RequestCreateComponent,
    RequestListComponent,
    RequestHomeComponent,
    RequestItemComponent,
    EditComponent,
    FormComponent,
  ],

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
