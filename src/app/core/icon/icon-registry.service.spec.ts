import { TestBed } from '@angular/core/testing';

import { IconRegistry } from './icon-registry.service';

describe('IconRegistry', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconRegistry = TestBed.get(IconRegistry);
    expect(service).toBeTruthy();
  });
});
