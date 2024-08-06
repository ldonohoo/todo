import { TestBed } from '@angular/core/testing';

import { ListHeadersService } from './list-headers.service';

describe('ListHeadersService', () => {
  let service: ListHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
