import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByLocationComponent } from './sales-by-location.component';

describe('SalesByLocationComponent', () => {
  let component: SalesByLocationComponent;
  let fixture: ComponentFixture<SalesByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
