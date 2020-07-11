import { Injectable } from '@angular/core';
import { SubSink } from 'subsink';
import { HomeDataService } from '../home-data.service';
import { CustomLoggerService } from '../core/logger/custom-logger.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private subs = new SubSink();

  constructor(private homeDataService: HomeDataService, private logger: CustomLoggerService) { }

  getBasicDetails() {
    return new Promise((resolve) => {

      this.subs.sink = this.homeDataService.getBasicDetails("details", "50000").subscribe((data: any) => {
        if (data && data.error) {
          this.logger.error(`HomeService:getBasicDetails:: error is ${data} ${JSON.stringify(data)}`);
          return resolve(null);
        }
      })
    });
  }

  ngDestroyHandler() {
    this.subs.unsubscribe();
  }
}
