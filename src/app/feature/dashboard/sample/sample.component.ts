import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import { StandardDataService } from 'src/app/core/state-management/standard-data.service';
import { StandardData } from 'src/app/core/entities/standard-data';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(private standardDatautility: StandardDataService) {
    super();
    this.isAuthenticated = true;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    const _standardData = new StandardData();
    _standardData.routeName = 'home';
    _standardData.data = null;
    this.standardDatautility.addNewValue(_standardData);
    this.standardDatautility.closeTheDataFlow();
  }
  redirectToHome(){
    this.routerService.navigate([""]);
  }

}
