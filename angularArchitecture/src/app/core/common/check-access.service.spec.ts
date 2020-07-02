import { TestBed } from '@angular/core/testing';

import { CheckAccessService } from './check-access.service';

describe('CheckAccessService', () => {
  let service: CheckAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
