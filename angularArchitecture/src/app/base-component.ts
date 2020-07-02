import { OnInit, OnDestroy, Component, AfterViewInit } from '@angular/core';
import { CustomLoggerService } from './core/logger/custom-logger.service';
import { AppInjector } from './app-injector';

@Component({
  template:''
})
export class BaseComponent implements OnInit, OnDestroy , AfterViewInit{
  private logger: CustomLoggerService;
  constructor() {

    // const injector = AppInjector.getInjector();
    this.logger = AppInjector.injector.get(CustomLoggerService);
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
