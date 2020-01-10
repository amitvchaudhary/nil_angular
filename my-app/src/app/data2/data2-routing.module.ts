import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Listdata2Component } from './listdata2/listdata2.component';


const routes: Routes = [
  { path: 'list2', component: Listdata2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Data2RoutingModule { }
