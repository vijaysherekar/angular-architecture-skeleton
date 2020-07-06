import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!environment.usesHTTPS) {
      return next.handle(request);
    }
    // clone request and replace 'http://' with 'https://' at the same time
    const secureReq = request.clone({
      url: request.url.replace('http://', 'https://')
    });
    // send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }
}
