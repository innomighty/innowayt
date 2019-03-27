import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {} from './usermanagement/usermanagement.module'
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'Dashboard', loadChildren : './dashboard/dashboard.module#DashboardModule' },
  { path: 'Booking', loadChildren : './bookingmanagement/bookingmanagement.module#BookingmanagementModule' },
  { path: 'History', loadChildren : './historypackagemanagement/historypackagemanagement.module#HistorypackagemanagementModule' },
  { path: 'Service', loadChildren : './servicemanagement/servicemanagement.module#ServicemanagementModule' },
  { path: 'User', loadChildren : './usermanagement/usermanagement.module#UsermanagementModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
