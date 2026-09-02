import { TestBed } from '@angular/core/testing';
import { MatchHistoryStore } from './match-history-store';

describe('MatchHistoryStore', () => {
  let service: MatchHistoryStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchHistoryStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
