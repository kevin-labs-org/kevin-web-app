import { Injectable, signal } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { Profile } from '@/profile/profile';

@Injectable()
export class ProfileStore {
  readonly puuid = signal('');

  private readonly profileResource = rxResource({
    params: (ctx) => this.puuid(),
    stream: (params) => this.sendGetSummonerRequest(params.params),
  });

  readonly profile = this.profileResource.value.asReadonly();
  readonly profile$ = toObservable(this.profile);

  reload(): boolean {
    return this.profileResource.reload();
  }

  private sendGetSummonerRequest(puuid: string): Observable<Profile> {
    if (!puuid) {
      return EMPTY;
    }

    return new Observable((observer) => {
      // Simulate an API call to get the summoner
      setTimeout(() => {
        observer.next({
          puuid: 'puuid',
          name: 'Doublelift',
          tag: 'NA1',
          level: 123,
          profileIconId: '123',
          rank: 'Diamond',
          lastUpdated: new Date(),
        });

        observer.complete();
      }, 1000);
    });
  }
}
