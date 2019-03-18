import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceListComponent } from './list/service-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ServiceShowComponent } from './service-show/service-show.component';

@NgModule({
  declarations: [ServiceListComponent, ServiceShowComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class ServiceModule {
}
