"use strict";
// 1. this keyword outside of function.

console.log(this);
// this keyword will point to global object here which is the window object in case of browser

// 2. this keyword in a simple function
const calcAge = function (birthyear) {
  console.log(this);
  // this keyword here will store undefined in case of simple functions which are not associated to any objects
  // It is only in strict mode. In sloppy mode, this in a simple function will point to the global objct.
  // this keyword contains undefined.
  // simple or regular function means function without an owner.
};

calcAge(1991);

// 3. this keyword in an arrow function
const calcAgeArrow = (birthyear) => {
  console.log(this);
  // Arrow functions does not have this keyword of their own so lexical scoping is used here according to which
  // this keyword points to the this keyword of the parent scope which is pointing to the window object.
};

calcAgeArrow();

// 4. this keyword with object method
const abhi = {
  age: 22,
  calcAge: function () {
    console.log(this);
    console.log(this.age);
    // this keyword will point to the caller of the method i.e. abhi object.
  },
};

abhi.calcAge();

// this keyword basically points to the object calling the method (owner) that has this keyword inside it.

// FINAL EXAMPLE

// the this keyword belongs to the object calling the function that has this keyword and not necessarily to the object in which
// function having this keyword is written.

const nidhi = {
  age: 27,
};

nidhi.calcAge = abhi.calcAge;
nidhi.calcAge();
// Here, this keyword points to the nidhi object.

// Another example,
const f = abhi.calcAge;
f();
// Here, this will point to the f() function, but this of simple function is undefined.

// but this.age gives error because this is undefined and undefined.age does not make any sense.
