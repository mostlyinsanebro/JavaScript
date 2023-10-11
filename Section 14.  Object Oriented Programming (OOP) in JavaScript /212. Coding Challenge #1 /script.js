// Create a constructor function to implement a Car. Car has a make and speed property.
// speed is in km/h.

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Implement accelarate method that will increase the Car's speed by 10 and will log the speed to the console.
// Implement brake method that will decrease the Car's speed by 5 and will log the speed to the console.

Car.prototype.accelarate = function () {
  this.speed = this.speed + 10;
  console.log(`'${this.make}' is going at ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`'${this.make}' is going at ${this.speed} Km/h`);
};

const BMW = new Car('BMW', 110);
const Mercedes = new Car('Mercedes', 100);

BMW.accelarate();
BMW.accelarate();
BMW.brake();
BMW.accelarate();

Mercedes.brake();
Mercedes.accelarate();
Mercedes.brake();
