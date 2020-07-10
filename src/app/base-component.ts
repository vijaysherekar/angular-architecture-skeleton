import { OnInit, OnDestroy, Component, AfterViewInit } from '@angular/core';
import { CustomLoggerService } from './core/logger/custom-logger.service';
import { ServiceLocator } from './service-locator';
import { ApplicationConstantsService } from './core/common/application-constants.service'
import { Router } from '@angular/router';
@Component({
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * This injected services can use across all derived components
   */
  protected logger: CustomLoggerService;
  public isAuthenticated: boolean;
  public APP_CONSTANTS: ApplicationConstantsService;
protected routerService:Router;
  constructor() {

    this.logger = ServiceLocator.injector.get(CustomLoggerService);
    this.APP_CONSTANTS = ServiceLocator.injector.get(ApplicationConstantsService);
    this.isAuthenticated = false;
    this.routerService = ServiceLocator.injector.get(Router);
  }
  ngOnInit() {
    this.logger.log(`BaseComponent:ngOnInit:: called`);
  }
  ngOnDestroy() {

    this.logger.log(`BaseComponent:ngOnDestroy:: derived class properties are ${JSON.stringify(Object.keys(this))}`);
  }
  ngAfterViewInit() {
    this.logger.log(`BaseComponent:ngAfterViewInit:: called`);
  }
}
