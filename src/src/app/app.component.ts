import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from './base-component';
import { StandardDataService } from './core/state-management/standard-data.service';
import { StandardData } from './core/entities/standard-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  title = 'angularArchitecture';
  standardDataSubscription: any;
  isHomePage$: boolean;
  events: string[] = [];
  opened: boolean = true;
  constructor(private standardDataService: StandardDataService) {
    super();
    this.standardDataSubscription = null;
    this.isHomePage$ = true;

  }

  subscriptionList() {
    this.standardDataSubscription = this.standardDataService.standardDataChanges.subscribe((result: StandardData | null) => {

      if (!result) {
        return;
      }
      if (!(result.routeName && result.routeName.toLowerCase() === "home")) {
        this.isHomePage$ = false;
        return;
      }
      this.isHomePage$ = true;
      return;
    });
  }
  ngOnInit() {
    this.subscriptionList();
  }
  ngOnDestroy() {
    if (this.standardDataSubscription) {
      this.standardDataSubscription.unsubscribe();
    }
  }
}
