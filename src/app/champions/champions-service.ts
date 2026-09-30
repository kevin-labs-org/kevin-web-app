import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetChampionsRequest, GetChampionsResponse } from '@/champions/get-champions';
import { Champion } from '@/champions/champion';

@Service()
export class ChampionsService {
  getChampions(request: GetChampionsRequest): Observable<GetChampionsResponse> {
    return of({
      champions: [
        {
          championId: '84',
          gamesPlayed: 12,
          gamesWon: 4,
          gamesLost: 8,
          gamesBanned: 3,
        } as Champion,
      ],
    });
  }
}
