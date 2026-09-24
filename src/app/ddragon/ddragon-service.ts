import { inject, Service } from '@angular/core';
import { ImagePathService } from '@/ddragon/image-path-service';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { map, Observable } from 'rxjs';

@Service()
export class DdragonService {
  private readonly ddragonMetaDataService = inject(DdragonMetadataService);
  private readonly imagePathService = inject(ImagePathService);

  public getChampionSquare(championId: string): Observable<string> {
    return this.imagePathService
      .getChampionSquare(championId)
      .pipe(map((path) => `${this.ddragonMetaDataService.cdnUrl}/${path}`));
  }

  public getChampionSplash(championId: number): string {
    return `${this.ddragonMetaDataService.cdnUrl}/${this.imagePathService.getChampionSplash(championId)}`;
  }

  public getRuneImageUrl(runeId: number): Observable<string> {
    return this.imagePathService
      .getRune(runeId)
      .pipe(map((path) => `${this.ddragonMetaDataService.cdnUrl}/${path}`));
  }
}
