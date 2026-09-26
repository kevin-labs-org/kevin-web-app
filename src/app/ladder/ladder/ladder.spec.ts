import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ladder } from './ladder';

describe('Ladder', () => {
  let component: Ladder;
  let fixture: ComponentFixture<Ladder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ladder],
    }).compileComponents();

    fixture = TestBed.createComponent(Ladder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
