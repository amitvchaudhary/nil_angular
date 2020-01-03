import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { CarComponent } from './car/car.component';
import { AnchorComponent } from './anchor/anchor.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    CarComponent,
    AnchorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
