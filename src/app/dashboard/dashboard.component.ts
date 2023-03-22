import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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
