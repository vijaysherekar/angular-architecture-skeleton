import { TestBed } from '@angular/core/testing';

import { CustomErrorService } from './custom-error.service';

describe('CustomErrorService', () => {
  let service: CustomErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
