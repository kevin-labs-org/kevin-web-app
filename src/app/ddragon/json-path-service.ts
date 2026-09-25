import { inject, Service } from '@angular/core';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';

/**
 * JsonPathService builds url paths for JSON data in Riot Data Dragon.
 */
@Service()
export class JsonPathService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);

  getChampionJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/champion.json`;
  }

  getRunesReforgedJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/runesReforged.json`;
  }

  getSummonerJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/summoner.json`;
  }

  getProfileIconJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/profileicon.json`;
  }

  getItemJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/item.json`;
  }

  getItemModifiersJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/item-modifiers.json`;
  }
}
