import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './home/profile-home.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [ProfileHomeComponent, FeedbackComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {
}
