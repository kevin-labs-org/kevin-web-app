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

  getChampionSquare(championId: string): string | undefined {
    const champion = this.identifierService.championIdToChampion(championId);
    if (!champion) return undefined;

    const image = champion.image;
    return `cdn/${this.ddragonMetaDataService.version}/img/${image.group}/${image.full}`;
  }

  getChampionTile(championId: string): string | undefined {
    const champion = this.identifierService.championIdToChampion(championId);
    if (!champion) return undefined;

    const image = champion.image;
    return `cdn/img/${image.group}/tiles/${champion.id}_0.jpg`;
  }

  getChampionCentered(championId: string): string | undefined {
    const champion = this.identifierService.championIdToChampion(championId);
    if (!champion) return undefined;

    const image = champion.image;
    return `cdn/img/${image.group}/centered/${champion.id}_0.jpg`;
  }

  getChampionLoading(championId: string): string | undefined {
    const champion = this.identifierService.championIdToChampion(championId);
    if (!champion) return undefined;

    const image = champion.image;
    return `cdn/img/${image.group}/loading/${champion.id}_0.jpg`;
  }

  getProfileIcon(profileIconId: number): string {
    return `cdn/${this.ddragonMetaDataService.version}/img/profileicon/${profileIconId}.png`;
  }

  getItem(itemId: string): string | undefined {
    const item = this.identifierService.itemIdToItem(itemId);
    if (!item) {
      return undefined;
    }

    const image = item.image;
    return `cdn/${this.ddragonMetaDataService.version}/img/${image.group}/${image.full}`;
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
