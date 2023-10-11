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

// The new operator calls the person function

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
console.log(Abhi instanceof Person); // true
console.log(a instanceof Person); // false

//////////////////////////////////////////////////////////////////////////////////////////////

// PROTOTYPES:- Each and every function in js automatically has a  property called prototype in it
// and that includes the constructor function as well.

// Now, every object that we create using the constructor function will get access to all the
// properties and methods that we define on the constructor's prototype property.

// Person.prototype -> All the objects created using the Person constructor function will get access
// to the methods and properties of this constructor functions's prototype property.

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

Abhi.calcAge();
// This is called prototypal inheritance.
// This way is a much better in order to attach a function or property to the prototype property of
// constructor function and then using it in all the objects because we do not have to repeat and attach the same code to
// each and every object created using that constructor function.

// If we would have written the method in the constructor function, that would have then be attached to every object and the
// efficiency would be very less and redundancy would be very much.

// This works because of the reason that every object has access to the methods and properties of it's prototype and
// Person.prototype is the prototype of Objects created using Person CF such as Abhi and Manuj.

// We can confirm that by using the below code.
console.log(Abhi.__proto__);

// NOTE -> ** The prototype of an object is the prototype property of the constructor function.
console.log(Abhi.__proto__ == Person.prototype);

// This will check whether Person.prototype is the prototype of Abhi object.
console.log(Person.prototype.isPrototypeOf(Abhi));

// Question:- Where does the proto property of the jonas object actually comes from...
// So the third step in the new opeartor will create this __proto__ property for an object
// and it will set the value of that property to the proptotype property of the function that
// is being called.
// This is how js knows internally that the Abhi object is connected to the Person.prototype

// We can also set properties on the prototype apart from methods on prototype.
Person.prototype.species = 'Homo Sapiens';
console.log(Abhi.species, Manuj.species);
// They will be same because both these objects are getting the access to the same property
// that is defined in the prototype property of the CF to which both of these objects are linked
// using their respective __proto__ property.

// We can also check if a property is own of an object or not
console.log(Abhi.hasOwnProperty('firstName'));
// firstName is the own property of Abhi object  while species is not.
console.log(Abhi.hasOwnProperty('species'));

/////////////////////////////////////////////////////////////////////////////////
// PROTOTYPAL INHERITANCE

// The Abhi objact has a __proto__ property that is the Person CF's prototype.
console.log(Abhi.__proto__);

// The prototype of Person's prototype is the Object.prototype which has all the properties of the object
// like hasOwnProperty.
console.log(Abhi.__proto__.__proto__);

// The prototype of Object.prototype will be null.
console.log(Abhi.__proto__.__proto__.__proto__);

// Prototype of Array
const arr = [1, 2, 3, 4, 1, 4, 1, 2, 3, 3]; // [] === new Array()

// The prototype of arr object contains all the Array build in methods and properties that we have been using
// line filter, map etc.
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

// The prototype of Array will be Object prototype property that has peoperties like hasOwnProperty() etc.
console.log(arr.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// We can also add a method or property in the Array.prototype property that can be used by any of the arrays then.

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// But this is not recommended as the new version of js m,ay have a method with same name and different functionality
// which can break our code.

// Get the protype chain of the h1 element as a DOM element is also an object in js.
const h1 = document.querySelector('h1');

// Also, functions are also objects in js and thus they have a prototype which points to
// Function object's prototype property which have various methods like call, bind, apply etc.
console.dir(x => x * 10);
