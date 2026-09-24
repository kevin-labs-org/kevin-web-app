import { inject, Service } from '@angular/core';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { map, Observable } from 'rxjs';
import { JsonDataService } from '@/ddragon/json-data-service';
import { Rune, Slot, Tree } from '@/ddragon/runes-reforged';

@Service()
export class ImagePathService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);
  private readonly jsonDataService = inject(JsonDataService);

  getChampionSquare(championId: string): Observable<string> {
    return this.jsonDataService.getChampion().pipe(
      map((data) => {
        const champion = Object.values(data.data).find((c) => c.id === championId);

        return champion
          ? `cdn/${this.ddragonMetaDataService.version}/img/champion/${champion.image.full}.png`
          : '';
      }),
    );
  }

  getChampionSplash(championId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/champion/${championId}/splash.png`;
  }

  getProfileIcon(profileIconId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/profileicon/${profileIconId}.png`;
  }

  getItem(itemId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/item/${itemId}.png`;
  }

  getRune(runeId: number): Observable<string> {
    return this.jsonDataService.getRunesReforged().pipe(
      map((data) => {
        const rune = data
          .flatMap((t: Tree) => t.slots)
          .flatMap((s: Slot) => s.runes)
          .find((r: Rune) => r.id === runeId);

        return rune ? `cdn/img/${rune.icon}` : '';
      }),
    );
  }
}
