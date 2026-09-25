import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { summonerResolver } from './summoner-resolver';
import { Summoner } from '@/profile/summoner';

describe('summonerResolver', () => {
  const executeResolver: ResolveFn<Summoner> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => summonerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
