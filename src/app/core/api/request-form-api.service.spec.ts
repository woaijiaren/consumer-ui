import { TestBed } from '@angular/core/testing';

import { RequestFormApi } from './request-form-api.service';

describe('RequestFormApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestFormApi = TestBed.get(RequestFormApi);
    expect(service).toBeTruthy();
  });
});
