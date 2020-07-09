import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
    this.isAuthenticated = true;
  }

  ngOnInit(): void {
  }

}
