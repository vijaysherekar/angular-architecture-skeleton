import { TestBed } from '@angular/core/testing';

import { EnsureHttpsInterceptor } from './ensure-https.interceptor';

describe('EnsureHttpsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EnsureHttpsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EnsureHttpsInterceptor = TestBed.inject(EnsureHttpsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
