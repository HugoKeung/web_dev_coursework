import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNoteComponent } from './individual-note.component';

describe('IndividualNoteComponent', () => {
  let component: IndividualNoteComponent;
  let fixture: ComponentFixture<IndividualNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
