import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-sales-by-location',
  templateUrl: './sales-by-location.component.html',
  styleUrls: ['./sales-by-location.component.css']
})
export class SalesByLocationComponent {
  titles: string[] | undefined;
  isSubmenuOn : boolean | undefined;
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
