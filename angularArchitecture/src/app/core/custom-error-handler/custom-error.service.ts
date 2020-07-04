import { Injectable, ErrorHandler } from '@angular/core';
import { CustomLoggerService } from "./../logger/custom-logger.service";

@Injectable({
  providedIn: 'root'
})
export class CustomErrorService implements ErrorHandler {

  constructor(private logger: CustomLoggerService) { }

  handleError(error: Error) {
    const err = {
      message: error.message ? error.message : error.toString(),
      stack: error.stack ? error.stack : ''
    };

    // Log  the error
    this.logger.error(`CustomErrorService:handleError:: ${err} ${JSON.stringify(err)} ${error}`);

  }
}
