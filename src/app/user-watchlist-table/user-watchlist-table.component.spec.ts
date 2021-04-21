import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatchlistTableComponent } from './user-watchlist-table.component';

describe('UserWatchlistTableComponent', () => {
  let component: UserWatchlistTableComponent;
  let fixture: ComponentFixture<UserWatchlistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWatchlistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWatchlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
