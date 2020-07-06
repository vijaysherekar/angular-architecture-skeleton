import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardGuard } from './core/guards/dashboard/dashboard.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { preload: false },
    canLoad: [DashboardGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
