'use strict';

// Classes in js
// Classes work in the same way as constructor functions but they are just made so as to
// make it easy for the programmers coming from other languages such as java use OOPs in js.

// Construction function way
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.caclAge = function () {
  console.log(2037 - this.birthYear);
};

const Abhi = new Person('Abhi', 2000);
Abhi.caclAge();

// ES6 classes way
// class declaration
class PersonCl {
  // Write a constructor function to initialize the variables
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // No need to write methods seperately in classes,we can do that in the class only
  // no need to use prototype in that case.

  // Methods will be added to the prototype property of PersonCl class which will be the __proto__
  // property of the objects created by this class.
  calcAge() {
    console.log(2050 - this.birthYear);
  }
}

const Abhinav = new PersonCl('Abhinav', 2000);
Abhinav.calcAge();

console.log(Abhinav.__proto__ === PersonCl.prototype);

// We can also add methods to the prototype peroperty of PersonCl class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

Abhinav.greet();

// Couple more things about classes.

// 1. Classes are not hoisted like functions in js.
// 2. Classes are first-class citizens just like functions in jsas they can be passes to and passes from functions.
// 3. Classes are executed in strict mode.
