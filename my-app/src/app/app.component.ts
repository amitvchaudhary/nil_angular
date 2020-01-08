import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  car;
  customeClick: string = 'Hello';

  GotClicked(e){
    alert(e);
  }
  constructor(private carService: CarService) {}

  openCar(){
    this.carService.getCar();
  }
 
}