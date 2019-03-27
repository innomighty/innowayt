import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingmanagementRoutingModule } from './bookingmanagement-routing.module';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingmanagementRoutingModule
  ]
})
export class BookingmanagementModule { }
