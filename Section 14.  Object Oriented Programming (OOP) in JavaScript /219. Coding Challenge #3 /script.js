'use script';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};

const Punto = new Car('Punto', 100);
Punto.accelarate();
Punto.brake();

// Created EV class
const EV = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

// EV.prototype will now inherit from the Car.prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
  console.log(`${this.make} is charged to ${this.battery}% now.`);
};

EV.prototype.accelarate = function () {
  this.speed += 20;
  this.battery -= 1;

  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.battery}%.`
  );
};

EV.prototype.constructor = EV;
//console.dir(EV.prototype.constructor);

const Tesla = new EV('Tesla', 120, 24);
Tesla.accelarate();
Tesla.brake();
Tesla.chargeBattery(98);
console.log(Tesla.__proto__ == EV.prototype);
console.log(EV.__proto__ == Car.prototype);
console.log(Punto.__proto__ == Car.prototype);
