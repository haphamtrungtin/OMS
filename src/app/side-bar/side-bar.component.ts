import { Component } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  elements = [
    {
      name: 'dashboard',
      imgSrc: './assets/dashboard_icon.png',
      path: '/dashboard',
    },
    {
      name: 'order',
      imgSrc: './assets/archive_icon.png',
      path: '/order',

    },
    {
      name: 'catalogue',
      imgSrc: './assets/book_icon.png',
      path: '/catalogue',

    },
    {
      name: 'inventory',
      imgSrc: './assets/package_icon.png',
      path: '/inventory',

    },
    {
      name: 'user',
      imgSrc: './assets/user_icon.png',
      path: '/user',

    },
    {
      name: 'customer',
      imgSrc: './assets/userAccount_icon.png',
      path: '/customer',

    },
    {
      name: 'contact',
      imgSrc: './assets/phone_icon.png',
      path: '/contact',

    },
    {
      name: 'payment',
      imgSrc: './assets/creditCard_icon.png',
      path: '/payment',
    },
  ];
  isSubmenuOn: boolean | undefined;
  constructor(private data : ShareService) {
  }
  ngOnInit(){
   this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn = state);
  }
}
