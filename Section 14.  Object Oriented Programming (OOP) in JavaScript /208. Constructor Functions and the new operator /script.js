'use strict';

// Constructor Functions
// We can use constructor functions to build an object using a function in js.
// A constructor function is similar to a normal function. The only difference is that we call the
// constructor function with the 'new' keyword.

// A constructor function should always start with a capital letter and we must always
// use function declaration and expression with constructor functions and not arrow functions
// because arrow functions does not have this keyword and we need this keyword for constructor functions.
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method in constructor functions.

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const Abhi = new Person('Abhinav', 2000);
console.log(Abhi);

// The new operator calls the person function/

// 1. {} is created.
// 2. function is called and this is set to {}.
// 3. {} is linked to a prototype.
// 4. function automatically returns {}.

const Manuj = new Person('Manuj', 2000);
console.log(Manuj);

// Constructor functions are used to simulate classes in js in order to create objects.
// like we did here.

// Abhi and Manuj are instances of Person.

const a = 'a';

// to check if an object is created using a constructor function or not.
console.log(Abhi instanceof Person);
console.log(a instanceof Person);
