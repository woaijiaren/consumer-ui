import { TestBed } from '@angular/core/testing';

import { UserApi } from './user-api.service';

describe('UserApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserApi = TestBed.get(UserApi);
    expect(service).toBeTruthy();
  });
});
