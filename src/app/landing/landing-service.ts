import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetLadderRequest, GetLadderResponse } from '@/landing/get-ladder';

@Service()
export class LandingService {
  getLadder(request: GetLadderRequest): Observable<GetLadderResponse> {
    const response: GetLadderResponse = {
      entries: [
        {
          puuid: 'example-puuid',
          name: 'Darkwings',
          region: 'NA',
          tag: 'NA1',
          summonerLevel: 194,
          profileIconId: '12',
          tier: '',
          division: '',
          leaguePoints: 4901,
          ladderRank: 12,
          primaryRole: '',
          champions: [],
        },
        {
          puuid: 'example-puuid-1',
          name: 'Zven',
          region: 'NA',
          tag: 'NA1',
          summonerLevel: 194,
          profileIconId: '12',
          tier: '',
          division: '',
          leaguePoints: 4901,
          ladderRank: 12,
          primaryRole: '',
          champions: [],
        },
        {
          puuid: 'example-puuid-2',
          name: 'Doublelift',
          region: 'NA',
          tag: 'NA1',
          summonerLevel: 194,
          profileIconId: '12',
          tier: '',
          division: '',
          leaguePoints: 4901,
          ladderRank: 12,
          primaryRole: '',
          champions: [],
        },
      ],
    };

    return of(response);
  }
}
