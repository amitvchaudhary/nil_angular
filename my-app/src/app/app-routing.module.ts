import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';


const routes: Routes = [
  // { path: '', redirectTo: '/c1', pathMatch: 'full' },
  // { path: 'c1', component: C1Component },
  // { path: 'c2', component: C2Component },
  // { path: 'c3', component: C3Component }
  { path: 'data1', loadChildren: './data1/data1.module#Data1Module'},
  { path: 'data2', loadChildren: './data2/data2.module#Data2Module'},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
