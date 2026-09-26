import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinLoss } from './win-loss';

describe('WinLoss', () => {
  let component: WinLoss;
  let fixture: ComponentFixture<WinLoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinLoss],
    }).compileComponents();

    fixture = TestBed.createComponent(WinLoss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
