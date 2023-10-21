'use script';

// In this lecture, we will do inheritance between classes with the help of constructor functions.

// Creating Person class with CF
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Adding the functions to the prototype of the Person CF which will be used by the objects
// created using this CF.
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

// Creating Student CF
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Now, we want to link Student and Person class, making Person as the parent and Student as the Child.
// The below line will not help, as it will set the Person prototype directly as the prototype of the
// Student class and not the __proto__ property of the Student class as the prototype property of the Person class.
// i.e. we want to set the __proto__ of the Student prototype as the Person.prototype.
// Student.prototype = Person.prototype;

// For that, do this
// This will set the __proto__ of the Student.prototype to Person.prototype property.
Student.prototype = Object.create(Person.prototype);

//console.log(Student.__proto__ === Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Abhi = new Student('Abhinav', 2000, 'CS');
Abhi.introduce();
console.log(Abhi.calcAge());
console.log(Abhi.__proto__ === Student.prototype);

console.log(Abhi instanceof Student);
console.log(Abhi instanceof Person);
console.log(Abhi instanceof Object);

// Setting the constructor of Student Prototype back to Student as it was initially Person because
// it was created using Object.create with Person prototype.
Student.prototype.constructor = Student;
console.dir(Abhi.__proto__);
console.dir(Student.prototype.constructor);

// The constructor chain is set up fine now but one small problem is that the __proto__ of the Abhi object should be prototype
// of Student but it is showing as the prototype of Person...why???
