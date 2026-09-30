import { TestBed } from '@angular/core/testing';
import { ChampionStore } from './champion-store';

describe('ChampionStore', () => {
  let service: ChampionStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
