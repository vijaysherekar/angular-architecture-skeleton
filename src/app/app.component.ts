import { Component } from '@angular/core';
import { BaseComponent } from './base-component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'angularArchitecture';

  constructor() {
    super();
  }
}
