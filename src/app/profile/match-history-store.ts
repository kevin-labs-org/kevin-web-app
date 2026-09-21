import { Injectable, resource, Service, signal } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetMatchHistoryResponse } from '@/profile/get-match-history-response';

@Injectable()
export class MatchHistoryStore {
  readonly puuid = signal('');

  readonly matchHistoryResource = rxResource({
    params: () => ({ puuid: this.puuid() }),
    stream: ({ params }) => this.sendGetMatchHistoryRequest(params.puuid),
  });

  reload(): void {
    this.matchHistoryResource.reload();
  }

  readonly matchHistory = this.matchHistoryResource.value.asReadonly();

  private sendGetMatchHistoryRequest(puuid: string): Observable<GetMatchHistoryResponse> {
    if (!puuid) {
      return EMPTY;
    }

    return new Observable((observer) => {
      // Simulate an API call to get the summoner
      setTimeout(() => {
        observer.next({
          matchList: [
            {
              id: 'bro',
              region: '',
              match_id: 'bro',
              puuid: '',
              gameMode: '',
              date: new Date(),
              duration: 0,
              version: 0,
              winner_id: '',
              team_id: '',
              participant_id: '',
              championId: '',
              championLevel: 0,
              teamPosition: '',
              summonerSpellIds: [],
              itemIds: [],
              runeIds: [],
              kills: 0,
              deaths: 0,
              assists: 0,
              kill_participation: 0,
              creep_score: 0,
              creep_score_per_minute: 0,
              damage_dealt: 0,
              damage_taken: 0,
              damage_delta_counterpart: 0,
              damage_share: 0,
              gold_earned: 0,
              gold_delta_counterpart: 0,
              gold_share: 0,
              vision_score: 0,
              control_wards_bought: 0,
              rank: '',
            },
          ],
          nextPageToken: 'nextPageToken',
        });
        observer.complete();
      }, 1000);
    });
  }
}

