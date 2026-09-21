import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileChampionAvg } from './profile-champion-avg';

describe('ProfileChampionAvg', () => {
  let component: ProfileChampionAvg;
  let fixture: ComponentFixture<ProfileChampionAvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileChampionAvg],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileChampionAvg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
