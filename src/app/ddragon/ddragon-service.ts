import { inject, Service } from '@angular/core';
import { ImagePathService } from '@/ddragon/image-path-service';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { ItemModel } from '@/ddragon/item-model';
import { JsonDataService } from '@/ddragon/json-data-service';
import { IdentifierService } from '@/ddragon/identifier-service';
import { ChampionModel } from '@/ddragon/champion-model';

@Service()
export class DdragonService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);
  private readonly identiferService = inject(IdentifierService);
  private readonly jsonDataService = inject(JsonDataService);
  private readonly imagePathService = inject(ImagePathService);

  public getChampionSquare(championId: number): string {
    const path = this.imagePathService.getChampionSquare(championId);
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  public getRuneImageUrl(runeId: number): string {
    const path = this.imagePathService.getRune(runeId);
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  getChampion(championId: number): ChampionModel | undefined {
    const champion = this.identiferService.championIdToChampion(championId);

    if (!champion) {
      return undefined;
    }

    return {
      id: championId,
      name: champion.name,
      iconUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionSquare(championId)}`,
    };
  }

  getItem(itemId: number): ItemModel | undefined {
    const item = this.identiferService.itemIdToItem(itemId);

    if (!item) {
      return undefined;
    }

    return {
      description: item.description,
      gold: item.gold.base,
      id: itemId,
      imageUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getItem(itemId)}`,
      name: item.name,
    };
  }

  getProfileIconUrl(profileIconId: string): string {
    const path = this.imagePathService.getProfileIcon(parseInt(profileIconId));
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }
}
