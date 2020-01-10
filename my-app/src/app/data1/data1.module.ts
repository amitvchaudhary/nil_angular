import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Data1RoutingModule } from './data1-routing.module';
import { Listdata1Component } from './listdata1/listdata1.component';


@NgModule({
  declarations: [Listdata1Component],
  imports: [
    CommonModule,
    Data1RoutingModule
  ]
})
export class Data1Module { }
