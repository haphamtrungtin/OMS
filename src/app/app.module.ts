import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { OrderComponent } from './order/order.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { SubmenuComponent } from './submenu/submenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LayoutComponent,
    OrderComponent,
    CatalogueComponent,
    SubmenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
