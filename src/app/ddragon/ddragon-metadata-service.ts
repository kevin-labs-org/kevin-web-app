import { Service } from '@angular/core';

@Service()
export class DdragonMetadataService {
  get cdnUrl(): string {
    return 'https://ddragon.leagueoflegends.com';
  }

  get version(): string {
    return '16.16.1';
  }
}
