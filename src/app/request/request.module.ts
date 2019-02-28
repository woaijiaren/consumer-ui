import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestCreateComponent } from './create/request-create.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestListComponent } from './list/request-list.component';
import { RequestHomeComponent } from './home/request-home.component';
import { WorkerTypePipe } from './pipes/worker-type.pipe';
import { InterviewChannelTypePipe } from './pipes/interview-channel-type.pipe';
import { RequestItemComponent } from './item/request-item.component';
import { RequestStatusPipe } from './pipes/request-status.pipe';

@NgModule({
  declarations: [
    RequestCreateComponent,
    RequestListComponent,
    RequestHomeComponent,
    WorkerTypePipe,
    InterviewChannelTypePipe,
    RequestItemComponent,
    RequestStatusPipe,
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
