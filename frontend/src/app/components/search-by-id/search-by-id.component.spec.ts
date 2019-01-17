import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByIdComponent } from './search-by-id.component';

describe('SearchByIdComponent', () => {
  let component: SearchByIdComponent;
  let fixture: ComponentFixture<SearchByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
