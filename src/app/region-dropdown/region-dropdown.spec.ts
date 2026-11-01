import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionDropdown } from './region-dropdown';

describe('RegionDropdown', () => {
  let component: RegionDropdown;
  let fixture: ComponentFixture<RegionDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
