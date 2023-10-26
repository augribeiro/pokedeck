import { TestBed } from '@angular/core/testing';

import { ApiRequesterService } from './api-requester.service';

describe('ApiRequesterService', () => {
  let service: ApiRequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
