import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TotalSalesComponent } from './totalsales/total-sales.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard.component';
import { SalesByLocationComponent } from './salesbylocation/sales-by-location.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    TotalSalesComponent,
    DashboardComponent,
    HeaderComponent,
    SalesByLocationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ChartModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
