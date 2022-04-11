import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ParentBComponent } from './parent-b/parent-b.component';

const routes: Routes = [
  { path: 'parenta', component: ParentAComponent },
  { path: 'parentb', component: ParentBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
