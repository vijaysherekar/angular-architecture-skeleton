import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { DashboardGuard } from 'src/app/core/guards/dashboard/dashboard.guard';


const routes: Routes = [{
  path: "",
  component: SampleComponent,
  canActivate: [DashboardGuard],
  children: [{
    path: "sample",
    component: SampleComponent,
    canActivate: [DashboardGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
