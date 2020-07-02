import { TestBed } from '@angular/core/testing';

import { CustomLoggerService } from './custom-logger.service';

describe('CustomLoggerService', () => {
  let service: CustomLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
