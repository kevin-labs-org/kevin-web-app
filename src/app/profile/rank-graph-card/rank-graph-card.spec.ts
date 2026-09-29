import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankGraphCard } from './rank-graph-card';

describe('RankGraphCard', () => {
  let component: RankGraphCard;
  let fixture: ComponentFixture<RankGraphCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankGraphCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RankGraphCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
