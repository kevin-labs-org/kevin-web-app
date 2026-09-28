import { TestBed } from '@angular/core/testing';
import { DdragonMetadataService } from '@/ddragon/ddragon-metadata-service';
import { DdragonService } from '@/ddragon/ddragon-service';
import { IdentifierService } from '@/ddragon/identifier-service';
import { ImagePathService } from '@/ddragon/image-path-service';

describe('DdragonService', () => {
  let service: DdragonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DdragonService,
        {
          provide: DdragonMetadataService,
          useValue: {
            cdnUrl: 'https://cdn.example.test',
          },
        },
        {
          provide: IdentifierService,
          useValue: {
            championIdToChampion: (id: string) =>
              id === '119'
                ? {
                    id: 'Draven',
                    key: '119',
                    name: 'Draven',
                  }
                : undefined,
            itemIdToItem: (id: string) =>
              id === '1000'
                ? {
                    name: 'Boots',
                    description: 'Slightly increases Move Speed',
                    gold: { base: 300 },
                  }
                : undefined,
          },
        },
        {
          provide: ImagePathService,
          useValue: {
            getChampionSquare: (id: string) => (id === '119' ? 'cdn/16.16.1/img/champion/Draven.png' : undefined),
            getRune: (id: number) => (id === 8137 ? 'cdn/img/perk-images/SixthSense.png' : 'cdn/img/unknown.png'),
            getItem: (id: string) => (id === '1000' ? 'cdn/16.16.1/img/item/1000.png' : undefined),
            getProfileIcon: (id: number) => `cdn/16.16.1/img/profileicon/${id}.png`,
          },
        },
      ],
    });

    service = TestBed.inject(DdragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the full URL for a champion square', () => {
    expect(service.getChampionSquare('119')).toBe(
      'https://cdn.example.test/cdn/16.16.1/img/champion/Draven.png',
    );
  });

  it('should return undefined when a champion is not found', () => {
    expect(service.getChampionSquare('999')).toBeUndefined();
  });

  it('should return the full URL for a rune image', () => {
    expect(service.getRuneImageUrl(8137)).toBe(
      'https://cdn.example.test/cdn/img/perk-images/SixthSense.png',
    );
  });

  it('should map a champion to a champion model', () => {
    expect(service.getChampion('119')).toEqual({
      id: '119',
      name: 'Draven',
      iconUrl: 'https://cdn.example.test/cdn/16.16.1/img/champion/Draven.png',
    });
  });

  it('should return undefined when mapping an unknown champion', () => {
    expect(service.getChampion('999')).toBeUndefined();
  });

  it('should map an item to an item model', () => {
    expect(service.getItem('1000')).toEqual({
      description: 'Slightly increases Move Speed',
      gold: 300,
      id: '1000',
      imageUrl: 'https://cdn.example.test/cdn/16.16.1/img/item/1000.png',
      name: 'Boots',
    });
  });

  it('should return undefined when mapping an unknown item', () => {
    expect(service.getItem('9999')).toBeUndefined();
  });

  it('should return the full URL for a profile icon', () => {
    expect(service.getProfileIconUrl('123')).toBe(
      'https://cdn.example.test/cdn/16.16.1/img/profileicon/123.png',
    );
  });
});
