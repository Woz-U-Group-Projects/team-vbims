import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageManagerComponent } from './home-page-manager.component';

describe('HomePageManagerComponent', () => {
  let component: HomePageManagerComponent;
  let fixture: ComponentFixture<HomePageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
