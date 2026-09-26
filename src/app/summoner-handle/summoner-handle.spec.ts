import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummonerHandle } from './summoner-handle';

describe('SummonerHandle', () => {
  let component: SummonerHandle;
  let fixture: ComponentFixture<SummonerHandle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonerHandle],
    }).compileComponents();

    fixture = TestBed.createComponent(SummonerHandle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
