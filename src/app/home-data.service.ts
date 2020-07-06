import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { CommonApiService } from './core/common/common-api.service';
import { HttpErrorHandlerService, HandleError } from './core/custom-error-handler/http-error-handler.service';
import { httpOptions } from './core/common/http-options';
import { environment } from './../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  private handleError: HandleError;
  private url: string;
  constructor(private httpApiHandler: CommonApiService, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError("HomeDataService");
    this.url = environment.hostApiUrl;
  }

  getBasicDetails(details: string, _timeout?: string) {
    if (_timeout) {
      httpOptions.headers.set("timeout", _timeout);
    }
    const _url = `${this.url}${details}`;
    return this.httpApiHandler.get(_url, httpOptions).pipe(
      catchError(this.handleError("getBasicDetails", {})));
  }
}
