import { Component, OnInit, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { BaseComponent } from '../base-component';
import { HomeService } from './home.service';
import { FormControl, Validators } from '@angular/forms';
import { StandardData } from '../core/entities/standard-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent extends BaseComponent implements OnDestroy, OnInit, AfterViewInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor(private homeService: HomeService) {
    super();
  }

  ngOnInit() {

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnDestroy() {

    this.homeService.ngDestroyHandler();
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    const _standardData = new StandardData();
    _standardData.routeName = 'home';
    _standardData.data = null;
    this.standardDatautility.addNewValue(_standardData);
    this.standardDatautility.closeTheDataFlow();
  }
}
