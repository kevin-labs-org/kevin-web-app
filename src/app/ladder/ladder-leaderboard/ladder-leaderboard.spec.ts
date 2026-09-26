import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LadderLeaderboard } from './ladder-leaderboard';

describe('LadderLeaderboard', () => {
  let component: LadderLeaderboard;
  let fixture: ComponentFixture<LadderLeaderboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadderLeaderboard],
    }).compileComponents();

    fixture = TestBed.createComponent(LadderLeaderboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
