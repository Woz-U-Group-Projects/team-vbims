import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInventorySpecialistComponent } from './home-page-inventory-specialist.component';

describe('HomePageInventorySpecialistComponent', () => {
  let component: HomePageInventorySpecialistComponent;
  let fixture: ComponentFixture<HomePageInventorySpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageInventorySpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageInventorySpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
