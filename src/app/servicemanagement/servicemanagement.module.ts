import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicemanagementRoutingModule } from './servicemanagement-routing.module';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServicemanagementRoutingModule
  ]
})
export class ServicemanagementModule { }
