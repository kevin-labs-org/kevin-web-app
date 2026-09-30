import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetChampionsRequest, GetChampionsResponse } from '@/champions/get-champions';

@Service()
export class ChampionsService {
  getChampions(request: GetChampionsRequest): Observable<GetChampionsResponse> {
    return of({
      champions: [
        {
          championId: '84',
          winRate: 0.57,
          playRate: 0.12,
          banRate: 0.07,
        },
        {
          championId: '1',
          winRate: 0.523,
          playRate: 0.07,
          banRate: 0.01,
        },
        {
          championId: '2',
          winRate: 0.46,
          playRate: 0.01,
          banRate: 0.001,
        },
        {
          championId: '5',
          winRate: 0.501,
          playRate: 0.03,
          banRate: 0.02,
        },
      ],
    });
  }
}
