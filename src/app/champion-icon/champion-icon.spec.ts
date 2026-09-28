import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionIcon } from './champion-icon';

describe('ChampionIcon', () => {
  let component: ChampionIcon;
  let fixture: ComponentFixture<ChampionIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
