import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor() { }
  private isSubmenuOn = new BehaviorSubject<boolean>(false);
  currentSubMenuState = this.isSubmenuOn.asObservable();

  changeSubMenuState (state:boolean){
    this.isSubmenuOn.next(state);
  }
}
