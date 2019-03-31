import { TestBed } from '@angular/core/testing';

import { ServiceApi } from './service-api.service';

describe('ServiceApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceApi = TestBed.get(ServiceApi);
    expect(service).toBeTruthy();
  });
});
