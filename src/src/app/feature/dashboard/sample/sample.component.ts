import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import { StandardDataService } from 'src/app/core/state-management/standard-data.service';
import { StandardData } from 'src/app/core/entities/standard-data';
import { ApplicationModule } from 'src/app/core/common/enums/application-module.enum';
import { ApplicationRole } from 'src/app/core/common/enums/application-role.enum';
import { UserActions } from 'src/app/core/common/enums/user-actions.enum';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    /**
     * This function will help to check if the user has access to different action on dashboard module
     */
    this.checkAccessUtility.checkActionLevelAccess(ApplicationModule.DASHBOARD, UserActions.VIEW).then((result) => {
      this.loggerUtility.log(`SampleComponent:ngOnInit:: ${result}`);
    });
  }

  ngAfterViewInit() {
    const _standardData = new StandardData();
    _standardData.routeName = 'home';
    _standardData.data = null;
    this.standardDatautility.addNewValue(_standardData);
    this.standardDatautility.closeTheDataFlow();
  }
  redirectToHome() {
    this.routerService.navigate([""]);
  }

}
