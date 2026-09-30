import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionTierlistOverview } from './champion-tierlist-overview';

describe('ChampionTierlistOverview', () => {
  let component: ChampionTierlistOverview;
  let fixture: ComponentFixture<ChampionTierlistOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionTierlistOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionTierlistOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
