import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SalesByLocationComponent } from './salesbylocation/sales-by-location.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    data:{title: "Dashboard"}
  }
  ,
  // {
  //   path:"totalsales",
  //   component:TotalSalesComponent,
  //   data:{title: "Total Sales"}
  // }
  // ,
  {
    path:"salebylocation",
    component:SalesByLocationComponent,
    data:{title: "Sales By Location"}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
