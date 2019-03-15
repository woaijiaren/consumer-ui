import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceListComponent } from './list/service-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServiceListComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule,
  ],
})
export class ServiceModule {
}
