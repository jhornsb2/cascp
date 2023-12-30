import { TestBed } from '@angular/core/testing';

import { ServiceObserverService } from './service-observer.service';

describe('ServiceObserverService', () => {
  let service: ServiceObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
