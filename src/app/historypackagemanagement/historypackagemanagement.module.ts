import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorypackagemanagementRoutingModule } from './historypackagemanagement-routing.module';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistorypackagemanagementRoutingModule
  ]
})
export class HistorypackagemanagementModule { }
