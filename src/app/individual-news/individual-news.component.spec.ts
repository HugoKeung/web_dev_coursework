import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNewsComponent } from './individual-news.component';

describe('IndividualNewsComponent', () => {
  let component: IndividualNewsComponent;
  let fixture: ComponentFixture<IndividualNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
