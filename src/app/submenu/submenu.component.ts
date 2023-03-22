import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ShareService } from '../services/share.service';


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  elements = [
    {
      name: 'totalSales',
      imgSrc: './assets/dollar.png',
      content:"Total Sales",
      path: '/dashboard/totalsales',
    },
    {
      name: 'totalOrder',
      imgSrc: './assets/cart.png',
      content:"Total Orders",
      path: '/dashboard/totalorder',
    },
    {
      name: 'cardStatic',
      imgSrc: './assets/creditCard.png',
      path: '/dashboard/cardstatic',
      content:"Card Statistics Payment",

    },
    {
      name: 'saleByLocation',
      imgSrc: './assets/location.png',
      path: '/dashboard/salebylocation',
      content:"Sales by Location",

    },
    {
      name: 'saleByPromotion',
      imgSrc: './assets/purchase.png',
      path: '/dashboard/salebypromotion',
      content:"Sale by Promotions",

    },
    {
      name: 'saleByChannel',
      imgSrc: './assets/store.png',
      path: '/dashboard/salebychannel',
      content:"Total sales by Channel",
    },
  ];
  isSubmenuOn: boolean | undefined;

  constructor(private data: ShareService) {
    
  }
  ngOnInit(){
    this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn =state );
   
  }

  triggerSubmenu(){
    this.data.changeSubMenuState(false);
  }
}
