import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'
/**
 * If require we can send errors to the server
 */
@Injectable({
  providedIn: 'root'
})
export class CustomLoggerService {

  constructor() { }

  log(message: string): void {

    if (environment.logLevel > 1) {
      console.log(message);
    }
  }
  info(message: string): void {

    if (environment.logLevel > 0) {
      console.log(message);
    }
  }

  error(message: string): void {

    console.error(message);
  }
}
