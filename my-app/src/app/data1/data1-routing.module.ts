import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Listdata1Component } from './listdata1/listdata1.component';


const routes: Routes = [
  { path: 'list1', component: Listdata1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Data1RoutingModule { }
