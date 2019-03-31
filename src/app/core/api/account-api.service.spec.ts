import { TestBed } from '@angular/core/testing';

import { AccountApi } from './account-api.service';

describe('AccountApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountApi = TestBed.get(AccountApi);
    expect(service).toBeTruthy();
  });
});
