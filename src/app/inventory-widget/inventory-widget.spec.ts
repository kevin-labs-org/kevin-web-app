import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryWidget } from './inventory-widget';

describe('InventoryWidget', () => {
  let component: InventoryWidget;
  let fixture: ComponentFixture<InventoryWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
