import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { BaseComponent } from '../base-component';
import { CustomLoggerService } from '../core/logger/custom-logger.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnDestroy, OnInit, AfterViewInit {

  constructor(private customLogger: CustomLoggerService, private homeService: HomeService) {
    super();
  }

  ngOnInit() {
    this.homeService.getBasicDetails();
  }
  ngOnDestroy() {

    this.homeService.ngDestroyHandler();
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
