import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { CustomLoggerService } from '../core/logger/custom-logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnDestroy, OnInit, AfterViewInit {

  _homeComponent: any;
  constructor(private customLogger: CustomLoggerService) {
    super();
    this._homeComponent = {
      test: ""
    };
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    debugger;
    this.customLogger.log(`HomeComponent:ngOnDestroy:: called`);
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.customLogger.log(`HomeComponent:ngAfterViewInit:: called`);
  }
}
