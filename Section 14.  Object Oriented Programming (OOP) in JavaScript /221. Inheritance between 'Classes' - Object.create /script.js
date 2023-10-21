'use strict';

// Creating the Parent Class
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const Abhi = Object.create(PersonProto);
// Abhi.init('Abhinav', 2000);
// console.log(Abhi.firstName, Abhi.birthYear);

// Creating the student class
const StudentProto = Object.create(PersonProto);

// StudentProto extends ParentProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and my course is ${this.course}`);
};

const Abhinav = Object.create(StudentProto);
Abhinav.init('Abhinav', 2000, 'CS');
Abhinav.introduce();
Abhinav.calcAge();
