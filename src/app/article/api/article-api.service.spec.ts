import { TestBed } from '@angular/core/testing';

import { ArticleApi } from './article-api.service';

describe('ArticleApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleApi = TestBed.get(ArticleApi);
    expect(service).toBeTruthy();
  });
});
