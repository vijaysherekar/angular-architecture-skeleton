/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './auth-interceptor.service';


import { LoggingInterceptorService } from './logging-interceptor.service';





/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [

  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true },


];
