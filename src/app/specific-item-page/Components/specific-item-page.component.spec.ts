import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificItemPageComponent } from './specific-item-page.component';

describe('SpecificItemPageComponent', () => {
  let component: SpecificItemPageComponent;
  let fixture: ComponentFixture<SpecificItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
