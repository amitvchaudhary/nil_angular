import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Data2RoutingModule } from './data2-routing.module';
import { Listdata2Component } from './listdata2/listdata2.component';


@NgModule({
  declarations: [Listdata2Component],
  imports: [
    CommonModule,
    Data2RoutingModule
  ]
})
export class Data2Module { }
