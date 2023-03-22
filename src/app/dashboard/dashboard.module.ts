import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TotalSalesComponent } from './totalsales/total-sales/total-sales.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard.component';
import { SalesByLocationComponent } from './salesbylocation/sales-by-location/sales-by-location.component';


@NgModule({
  declarations: [
    TotalSalesComponent,
    DashboardComponent,
    HeaderComponent,
    SalesByLocationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
