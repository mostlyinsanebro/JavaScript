"use strict";
// Using the this keyword inside a regular function in a method.



const abhi = {
  firstName: "Abhinav",
  birthYear: 2000,
  calcAge: function () {
    console.log(2037 - this.birthYear);

    const self = this;

    const isgenZ = function () {
      console.log(self.birthYear >= 2000 && self.birthYear <= 2010);
      // console.log(this.birthYear >= 2000 && this.birthYear <= 2010);
    };

    isgenZ();
    // We will get an error here beacuse the this keyword in an arrow function is always
    // undefined whether it is used in global scope or in a method.
    // There are 2 solutions to it -> 1. use a self variable having this stored in ot or
    // 2. newer approach is to use an arrow function, because it uses this using lexical scoping.

    // this of function declaration is also undefined just like regular function expression.
    // function expr. and decl get their own this keyword which is undefined.

    function isgenZDecl() {
      console.log(this);
    }

    isgenZDecl();

    //2. Using arrow function
    const isgenZarrow = () => {
      console.log(this.birthYear >= 2000 && this.birthYear <= 2010);
    };

    isgenZarrow();
    // this line will give correct output because arrow function does not have it's own this keyword and will use this keyword of the parent scope.
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

abhi.calcAge();

// Arguments keyword
// The function declaration and function expression gets the arguments keyword which conatins all the
// arguments passed to that function but arrow functions do not get arguments keyword in them.

function addNumbers(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(addNumbers(2, 3));

addNumbers(2, 3, 4, 5);
// Arguments keyword will return all the passed arguments to the function.

const addNumbersarrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
console.log(addNumbersarrow(2, 3)); // will get error, arguments are not defined in arrow function.
