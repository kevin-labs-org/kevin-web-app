import { TestBed } from '@angular/core/testing';
import { ConnectWebTransport } from './connect-web-transport';

describe('ConnectWebTransport', () => {
  let service: ConnectWebTransport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectWebTransport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
