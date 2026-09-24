import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPathService } from '@/ddragon/json-path-service';
import { RunesReforged } from '@/ddragon/runes-reforged';
import { Observable, shareReplay } from 'rxjs';
import { Champion } from '@/ddragon/champion';

@Service()
export class JsonDataService {
  private readonly http = inject(HttpClient);

  private readonly jsonPathService = inject(JsonPathService);

  private readonly champion$ = this.http
    .get<Champion>(this.jsonPathService.getChampionJson('en_US'))
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  private readonly runesReforged$ = this.http
    .get<RunesReforged>(this.jsonPathService.getRunesReforgedJson('en_US'))
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  getChampion(): Observable<Champion> {
    return this.champion$;
  }

  getRunesReforged(): Observable<RunesReforged> {
    return this.runesReforged$;
  }
}
