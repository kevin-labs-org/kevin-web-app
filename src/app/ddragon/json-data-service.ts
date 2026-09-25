import { inject, Service } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { JsonPathService } from '@/ddragon/json-path-service';
import { RunesReforged } from '@/ddragon/runes-reforged';
import { Observable, shareReplay } from 'rxjs';
import { Champion } from '@/ddragon/champion';
import { Item } from '@/ddragon/item';

/**
 * JsonDataService handles fetching and caching of JSON data from Riot Data Dragon.
 */
@Service()
export class JsonDataService {
  private readonly http = inject(HttpClient);

  private readonly jsonPathService = inject(JsonPathService);

  readonly champion = httpResource<Champion>(() => {
    return this.jsonPathService.getChampionJson('en_US');
  });

  readonly runesReforged = httpResource<RunesReforged>(() => {
    return this.jsonPathService.getRunesReforgedJson('en_US');
  });

  readonly item = httpResource<Item>(() => {
    return this.jsonPathService.getRunesReforgedJson('en_US');
  });

  readonly itemModifiers = httpResource<RunesReforged>(() => {
    return this.jsonPathService.getRunesReforgedJson('en_US');
  });

  readonly profileIcon = httpResource<RunesReforged>(() => {
    return this.jsonPathService.getRunesReforgedJson('en_US');
  });

  readonly summoner = httpResource<RunesReforged>(() => {
    return this.jsonPathService.getRunesReforgedJson('en_US');
  });

  // TODO: remove everything after

  private readonly runesReforged$ = this.http
    .get<RunesReforged>(this.jsonPathService.getRunesReforgedJson('en_US'))
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  getRunesReforged(): Observable<RunesReforged> {
    return this.runesReforged$;
  }
}
