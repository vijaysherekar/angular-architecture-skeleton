import { TestBed } from '@angular/core/testing';

import { ApplicationConstantsService } from './application-constants.service';

describe('ApplicationConstantsService', () => {
  let service: ApplicationConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
