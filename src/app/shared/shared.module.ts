import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from '@ui-model/angular';
import { BusinessTypePipe } from './pipes/business-type.pipe';
import { InterviewChannelTypePipe } from './pipes/interview-channel-type.pipe';
import { RequestStatusPipe } from './pipes/request-status.pipe';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BusinessTypePipe,
    InterviewChannelTypePipe,
    RequestStatusPipe,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UiModelModule,
  ],
  exports: [
    BusinessTypePipe,
    InterviewChannelTypePipe,
    RequestStatusPipe,
    LayoutComponent,
    UiModelModule,
  ],
})
export class SharedModule {
}
