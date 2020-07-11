import { OnInit, OnDestroy, Component, AfterViewInit } from '@angular/core';
import { CustomLoggerService } from './core/logger/custom-logger.service';
import { ServiceLocator } from './service-locator';
import { ApplicationConstantsService } from './core/common/application-constants.service'
import { Router } from '@angular/router';
import { StandardDataService } from './core/state-management/standard-data.service';
import { CheckAccessService } from './core/common/check-access.service';
@Component({
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * This injected services can use across all derived components
   */
  protected loggerUtility: CustomLoggerService;
  public APP_CONSTANTS: ApplicationConstantsService;
  protected routerService: Router;
  protected standardDatautility: StandardDataService;
  protected checkAccessUtility:CheckAccessService;
  constructor() {

    this.loggerUtility = ServiceLocator.injector.get(CustomLoggerService);
    this.APP_CONSTANTS = ServiceLocator.injector.get(ApplicationConstantsService);
    this.routerService = ServiceLocator.injector.get(Router);
    this.standardDatautility= ServiceLocator.injector.get(StandardDataService);
    this.checkAccessUtility= ServiceLocator.injector.get(CheckAccessService);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.loggerUtility.log(`BaseComponent:ngOnDestroy:: derived class properties are ${JSON.stringify(Object.keys(this))}`);
  }

  ngAfterViewInit() {
    this.loggerUtility.log(`BaseComponent:ngAfterViewInit:: called`);
  }
}
