import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementService} from '../services/management.service'
import { HttpClient } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  providers:[ ManagementService ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
