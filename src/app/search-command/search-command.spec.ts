import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCommand } from './search-command';

describe('SearchCommand', () => {
  let component: SearchCommand;
  let fixture: ComponentFixture<SearchCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCommand],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCommand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
