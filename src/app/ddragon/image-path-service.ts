import { inject, Service } from '@angular/core';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { JsonDataService } from '@/ddragon/json-data-service';
import { Rune, Slot, Tree } from '@/ddragon/runes-reforged';
import { IdentifierService } from '@/ddragon/identifier-service';

@Service()
export class ImagePathService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);
  private readonly jsonDataService = inject(JsonDataService);
  private readonly identifierService = inject(IdentifierService);

  getChampionSquare(championId: number): string {
    const championJson = this.jsonDataService.champion.value();
    const championName = this.identifierService.championIdToName(championId);
    const image = championJson?.data[championName]?.image.full;
    return `cdn/${this.ddragonMetaDataService.version}/img/champion/${image}.png`;
  }

  getProfileIcon(profileIconId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/profileicon/${profileIconId}.png`;
  }

  getItem(itemId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/item/${itemId}.png`;
  }

  getSpell(spellId: string): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/spell/${spellId}.png`;
  }

  getRune(runeId: number): string {
    const runesReforgedJson = this.jsonDataService.runesReforged.value();

    const rune = runesReforgedJson
      ?.flatMap((t: Tree) => t.slots)
      .flatMap((s: Slot) => s.runes)
      .find((r: Rune) => r.id === runeId);

    return `cdn/img/${rune?.icon}`;
  }
}
