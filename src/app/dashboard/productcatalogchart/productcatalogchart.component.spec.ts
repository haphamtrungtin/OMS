import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatalogchartComponent } from './productcatalogchart.component';

describe('ProductcatalogchartComponent', () => {
  let component: ProductcatalogchartComponent;
  let fixture: ComponentFixture<ProductcatalogchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcatalogchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcatalogchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
