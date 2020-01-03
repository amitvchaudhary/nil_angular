import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  car: Car = new Car();
  carList: Car[] = [];
  caraddList: Car[] = [];
  // car.name;
  //visibleCar: string;

  constructor() { }

  ngOnInit() {
  }
  addcar(KEY) {
    const newCar: Car = new Car();
    newCar.name = this.car.name;
    newCar.color = this.car.color;
    newCar.Variant = this.car.Variant;
    newCar.Price = this.car.Price;
    newCar.key = KEY;
    this.carList.push(newCar);
    //  this.caraddList = this.carList;
  }

  sendFirstCarToProduction() {
    if (this.carList.length > 0) {
      var removecar = this.carList.shift();
      this.caraddList.push(removecar);
    }
    else {

    }

  }
  sendFirstCarToStock() {
    var addcar = this.caraddList.shift();
    this.carList.push(addcar);
  }

  sendToStock(carIndex) {
    this.carList.push(this.caraddList[carIndex]);
    this.caraddList.splice(carIndex, 1);
  }
  sendToProduction(carIndex) {
    this.caraddList.push(this.carList[carIndex]);
    this.carList.splice(carIndex, 1);

  }

}
export class Car {
  name: string;
  color: string;
  Variant: string;
  Price: number;
  key: string;
}