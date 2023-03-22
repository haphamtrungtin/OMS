import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalSalesComponent } from './dashboard/totalsales/total-sales/total-sales.component';
import { LayoutComponent } from './layout/layout.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: ()=> import("./dashboard/dashboard.module").then(m => m.DashboardModule)},
      { path: 'order', component: OrderComponent , data:{title: "Order"}},
      { path: 'catalogue', component: CatalogueComponent , data:{title: "Catalogue"}},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
