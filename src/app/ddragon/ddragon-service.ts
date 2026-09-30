import { inject, Service } from '@angular/core';
import { ImagePathService } from '@/ddragon/image-path-service';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { ItemModel } from '@/ddragon/item-model';
import { IdentifierService } from '@/ddragon/identifier-service';
import { ChampionModel } from '@/ddragon/champion-model';

@Service()
export class DdragonService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);
  private readonly identiferService = inject(IdentifierService);
  private readonly imagePathService = inject(ImagePathService);

  public getChampionSquare(championId: string): string | undefined {
    const path = this.imagePathService.getChampionSquare(championId);
    if (!path) return undefined;
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  public getChampionTileImageUrl(championId: string): string | undefined {
    const path = this.imagePathService.getChampionTile(championId);
    if (!path) return undefined;
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  public getChampionCenteredImageUrl(championId: string): string | undefined {
    const path = this.imagePathService.getChampionCentered(championId);
    if (!path) return undefined;
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  public getChampionLoadingImageUrl(championId: string): string | undefined {
    const path = this.imagePathService.getChampionLoading(championId);
    if (!path) return undefined;
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  public getRuneImageUrl(runeId: number): string {
    const path = this.imagePathService.getRune(runeId);
    return `${this.ddragonMetaDataService.cdnUrl}/${path}`;
  }

  getChampion(championId: string): ChampionModel | undefined {
    const champion = this.identiferService.championIdToChampion(championId);

    if (!champion) {
      return undefined;
    }

    return {
      id: championId,
      name: champion.name,
      iconUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionSquare(championId)}`,
      centeredImageUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionCentered(championId)}`,
      loadingImageUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionLoading(championId)}`,
      tilesImageUrl: `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionTile(championId)}`,
    };
  }

  getAllChampions(): ChampionModel[] | undefined {
    const ids = this.identiferService.allChampionIds();
    if (!ids) return undefined;

    const result: ChampionModel[] = [];
    for (const id of ids) {
      const champion = this.getChampion(id);
      if (!champion) return undefined;
      result.push(champion);
    }

    return result;
  }

  getItem(itemId: string): ItemModel | undefined {
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
