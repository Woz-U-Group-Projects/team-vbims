import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDefaultComponent } from './home-page-default.component';

describe('HomePageDefaultComponent', () => {
  let component: HomePageDefaultComponent;
  let fixture: ComponentFixture<HomePageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
