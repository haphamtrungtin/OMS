import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalreturnComponent } from './totalreturn.component';

describe('TotalreturnComponent', () => {
  let component: TotalreturnComponent;
  let fixture: ComponentFixture<TotalreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
