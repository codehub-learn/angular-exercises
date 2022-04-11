import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ParentBComponent } from './parent-b/parent-b.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ParentAComponent,
    ParentBComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
