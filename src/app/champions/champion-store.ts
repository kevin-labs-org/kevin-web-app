import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ChampionsService } from '@/champions/champions-service';
import { GetChampionsRequest } from '@/champions/get-champions';
import { NEVER } from 'rxjs';

@Injectable()
export class ChampionStore {
  private readonly championsService = inject(ChampionsService);

  private readonly request = signal<GetChampionsRequest | null>(null);

  private readonly _champions = rxResource({
    params: () => this.request(),
    stream: ({ params }) => {
      if (!params) {
        return NEVER;
      }

      return this.championsService.getChampions(params);
    },
  });

  readonly champions = this._champions.asReadonly();

  sendRequest(request: GetChampionsRequest): void {
    this.request.set(request);
  }
}
