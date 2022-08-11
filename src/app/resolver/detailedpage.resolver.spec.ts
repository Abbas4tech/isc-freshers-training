import { TestBed } from '@angular/core/testing';

import { DetailedpageResolver } from './detailedpage.resolver';

describe('DetailedpageResolver', () => {
  let resolver: DetailedpageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailedpageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
