'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2037 - this.birthYear;
  }

  greet() {
    console.log(`Het ${this.fullName}`);
  }
}

const Abhi = new PersonCl('Abhinav Prajapati', 2000);
//console.log(Abhi.calcAge());

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName}, I'm ${
        2037 - this.birthYear
      } years old and studying ${this.course}`
    );
  }

  greet() {
    console.log(`Hey student ${this.fullName}`);
  }
}

const Abhinav = new StudentCl('Abhinav Prajapati', 2000, 'CS');

// StudentCl is the child of PersonCl and therefore, is able to use calcAge() of Parent class.
console.log(Abhinav.calcAge());

Abhinav.introduce();

// Polymorphism
Abhinav.greet();
