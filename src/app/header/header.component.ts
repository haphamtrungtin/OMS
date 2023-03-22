import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() links = '';
  titles: string | undefined;
  isSubmenuOn: boolean | undefined;
  constructor(private data : ShareService, private route:ActivatedRoute) {
    
  }
  ngOnInit(){
    this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn = state);
    this.titles = this.route.snapshot.data['title'];
  }
}
