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
      path: '/dashboard',
      icon: "pi pi-th-large"
    },
    {
      name: 'order',
      path: '/order',
      icon: "pi pi-box"
    },
    {
      name: 'catalogue',
      path: '/catalogue',
      icon : "pi pi-book"
    },
    {
      name: 'inventory',
      path: '/inventory',
      icon: "pi pi-inbox"
    },
    {
      name: 'user',
      path: '/user',
      icon: "pi pi-user"
    },
    {
      name: 'customer',
      path: '/customer',
      icon: "pi pi-users"

    },
    {
      name: 'contact',
      path: '/contact',
      icon: "pi pi-phone"

    },
    {
      name: 'payment',
      path: '/payment',
      icon: "pi pi-creadit-card"

    },
  ];
  isSubmenuOn: boolean | undefined;
  constructor(private data : ShareService) {
  }
  ngOnInit(){
   this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn = state);
  }
}
