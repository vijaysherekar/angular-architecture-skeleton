import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetailsService } from '../common/user-details.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserDetailsService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Get the auth token from the service.
    const authToken = this.userService.getJwtToken();
    if (!authToken) {
      return next.handle(request);
    }
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next.handle(authReq);

  }
}
