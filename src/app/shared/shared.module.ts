import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessTypePipe } from './pipes/business-type.pipe';
import { InterviewChannelTypePipe } from './pipes/interview-channel-type.pipe';
import { RequestStatusPipe } from './pipes/request-status.pipe';

@NgModule({
  declarations: [
    BusinessTypePipe,
    InterviewChannelTypePipe,
    RequestStatusPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BusinessTypePipe,
    InterviewChannelTypePipe,
    RequestStatusPipe,
  ],
})
export class SharedModule {
}
