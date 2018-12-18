import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockPageComponent } from './out-of-stock-page.component';

describe('OutOfStockPageComponent', () => {
  let component: OutOfStockPageComponent;
  let fixture: ComponentFixture<OutOfStockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfStockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfStockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
