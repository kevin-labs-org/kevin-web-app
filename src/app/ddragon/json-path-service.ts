import { inject, Service } from '@angular/core';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';

@Service()
export class JsonPathService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);

  getChampionJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/champion.json`;
  }

  getRunesReforgedJson(locale: string): string {
    return `${this.ddragonMetaDataService.cdnUrl}/cdn/${this.ddragonMetaDataService.version}/data/${locale}/runesReforged.json`;
  }
}
