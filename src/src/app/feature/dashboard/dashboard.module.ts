import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SampleComponent } from './sample/sample.component';
import {SharedModule} from './../../shared/shared.module';



@NgModule({
  declarations: [SampleComponent, ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
