import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticGroup } from './statistic-group';

describe('StatisticGroup', () => {
  let component: StatisticGroup;
  let fixture: ComponentFixture<StatisticGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
