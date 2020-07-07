import { OnInit, OnDestroy, Component, AfterViewInit } from '@angular/core';
import { CustomLoggerService } from './core/logger/custom-logger.service';
import { ServiceLocator } from './service-locator';

@Component({
  template:''
})
export class BaseComponent implements OnInit, OnDestroy , AfterViewInit{
  protected logger: CustomLoggerService;
  constructor() {

    this.logger = ServiceLocator.injector.get(CustomLoggerService);
  }
  ngOnInit() {
    this.logger.log(`BaseComponent:ngOnInit:: called`);
  }
  ngOnDestroy() {

    this.logger.log(`BaseComponent:ngOnDestroy:: derived class properties are ${JSON.stringify(Object.keys(this))}`);
  }
  ngAfterViewInit(){
    this.logger.log(`BaseComponent:ngAfterViewInit:: called`);
  }
}
