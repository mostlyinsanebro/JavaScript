"use strict";
// One pitfall of using this keyword in an arrow function as opposed to a regular function
// is that arrow function does not get it's own this keyword and therefore, points to the
// parent object which isn this case the window object and that can be dangerous and create errors.

// 2. Also, if firstName would have been defined using var here, then this in the greet() will use
// this variable because defining a variable will var will create it's property in the window object which
// this keyword of greet() uses. Another reason, not to use var.

var firstName = "Sunidhi";

const abhi = {
  firstName: "Abhinav",
  birthYear: 2000,
  calcAge: function () {
    console.log(2037 - this.birthYear);
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

abhi.greet();
// 1. Here, we will get the output as 'Hey undefined' because the arrow function does not get it's own this keyword
// so it uses the this keyword of parent scope i.e. global window object here in which firstName is indefined.
// When we try to get a property from an object that does not exist in that object, we do not get error but we get undefined.

// abhi.calcAge();

// Also, if you are thinking that the parent scope of greet() function is the scope in the object, it is not right because
// unlike functions the {} of an object does not creatre a scope but it is just an object literal.
// The parent scope of greet() function is the gloabl scope in this case.

// Takeaway is to never use arrow function.
