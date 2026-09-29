import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreboardTab } from './scoreboard-tab';

describe('ScoreboardTab', () => {
  let component: ScoreboardTab;
  let fixture: ComponentFixture<ScoreboardTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreboardTab],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
