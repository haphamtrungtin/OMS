import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent {
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
