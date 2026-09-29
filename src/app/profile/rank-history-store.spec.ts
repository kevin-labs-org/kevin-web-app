import { TestBed } from '@angular/core/testing';
import { RankHistoryStore } from './rank-history-store';

describe('RankHistoryStore', () => {
  let service: RankHistoryStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankHistoryStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
