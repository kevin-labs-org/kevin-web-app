import { TestBed } from '@angular/core/testing';
import { DdragonService } from '@/ddragon/ddragon-service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('DdragonService', () => {
  let service: DdragonService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DdragonService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Draven square image path', () => {
    const got = service.getChampionSquare(119);

    http
      .expectOne('https://ddragon.leagueoflegends.com/cdn/16.16.1/data/en_US/champion.json')
      .flush({
        data: {
          Draven: {
            id: '119',
            image: { full: 'Draven' },
          },
        },
      });

    expect(got).toBe('https://ddragon.leagueoflegends.com/cdn/16.16.1/img/champion/Draven.png');
  });

  it('should return Sixth Sense url', () => {
    const got = service.getRuneImageUrl(8137);

    expect(got).toBe(
      'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SixthSense/SixthSense.png',
    );
  });
});
