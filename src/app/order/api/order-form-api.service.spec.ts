import { TestBed } from '@angular/core/testing';

import { OrderFormApi } from './order-form-api.service';

describe('OrderFormApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderFormApi = TestBed.get(OrderFormApi);
    expect(service).toBeTruthy();
  });
});
