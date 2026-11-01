import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LadderCard } from './ladder-card';

describe('LadderCard', () => {
  let component: LadderCard;
  let fixture: ComponentFixture<LadderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadderCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LadderCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
