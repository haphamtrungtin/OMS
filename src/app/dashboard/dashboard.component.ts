import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
import { ShareService } from '../services/share.service';
import { DashboardStatistic } from './interfaces/dashboard-statistic';

let statisticData: DashboardStatistic = {
  orderData: {
    newOrders: 234,
    issue: 2
  },
  productInventoryData: {
    productOutOfStock: 12,
    nearlyOutOfStock: 2,
    notSellingProductInLastThreeMonth: 345
  },
  productData: {
    Inactive: 7
  },
  channelData: {
    activeChannel: 9,
    inactiveChannel: 1
  }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  //data for test
  statisticData: DashboardStatistic = statisticData;

  isSubmenuOn: boolean | undefined;
  titles: string[] | undefined;
  constructor(private data : ShareService, private route:ActivatedRoute) {
  }
 
  ngOnInit() {
    this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn = state);
    this.titles = this.route.snapshot.data['title'];
  }
 
  triggerSubmenu(){
    this.data.changeSubMenuState(true);
  }
}
