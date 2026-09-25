import { TestBed } from '@angular/core/testing';
import { DdragonMetadataService } from './ddragon-metadata-service';

describe('DdragonMetadataService', () => {
  let service: DdragonMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdragonMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
