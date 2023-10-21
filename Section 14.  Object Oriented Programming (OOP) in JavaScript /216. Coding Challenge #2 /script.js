'use strict';

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed * 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelarate() {
    this.speed = this.speed + 10;
    console.log(`${this.brand} is going at ${this.speed} KM/h`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.brand} is going at ${this.speed} KM/h`);
  }
}

const Ford = new Car('Ford', 120);
console.log(Ford.speedUS);
Ford.accelarate();
Ford.brake();
Ford.speedUS = 50;
console.log(Ford);

// Getters and setters are used to convert functions to properties
