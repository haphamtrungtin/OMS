import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TotalSalesComponent } from './totalsales/total-sales/total-sales.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard.component';
import { SalesByLocationComponent } from './salesbylocation/sales-by-location/sales-by-location.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from "ng-apexcharts";
import { LinechartComponent } from './linechart/linechart.component';
import { TotalsalechartComponent } from './totalsalechart/totalsalechart.component';
import { TopsellingproductComponent } from './topsellingproduct/topsellingproduct.component';
import { SalestoreComponent } from './salestore/salestore.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ProductcatalogchartComponent } from './productcatalogchart/productcatalogchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { TotalreturnComponent } from './totalreturn/totalreturn.component';


@NgModule({
  declarations: [
    TotalSalesComponent,
    DashboardComponent,
    HeaderComponent,
    SalesByLocationComponent,
    LinechartComponent,
    TotalsalechartComponent,
    TopsellingproductComponent,
    SalestoreComponent,
    BarchartComponent,
    ProductcatalogchartComponent,
    DoughnutchartComponent,
    TotalreturnComponent,
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
