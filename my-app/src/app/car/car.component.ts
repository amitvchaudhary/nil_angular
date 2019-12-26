import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];
  constructor() { }

  ngOnInit() {
    this.newcar();
  }

  newcar() {
    const car = new Car();
    car.companyName = 'NilKamal';
    car.color = 'Black';
    car.model = 'S';
    car.price = 10000;

    this.carList.push(car);

  }
}

export class Car {
  companyName: string;
  color: string;
  model: string;
  price: number;
}
