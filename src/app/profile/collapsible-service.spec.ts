import { TestBed } from '@angular/core/testing';
import { CollapsibleService } from './collapsible-service';

describe('CollapsibleService', () => {
  let service: CollapsibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollapsibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
