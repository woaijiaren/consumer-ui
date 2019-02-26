import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHomeComponent } from './home/profile-home.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ProfileHomeComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
}
