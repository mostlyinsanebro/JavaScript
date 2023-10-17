'use strict';

// Setters and getters on an Object.
const abhi = {
  fitsName: 'Abhinav',
  lastName: 'Prajapati',
  birthYear: 2000,
  // Getter in object
  get age() {
    return 2037 - this.birthYear;
  },

  // Setter in object
  set age(birthYear) {
    this.birthYear = birthYear;
  },
};

abhi.age = 1995;
console.log(abhi.age);

// Getters and setters in classes
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Setting an already existing property. This will create a new property _fullName
  // and the fullName will be undefined..point to be noted.
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} does not contain a space`);
  }

  get fullName() {
    return this._fullName;
  }
}

const Abhinav = new Person('Abhinav Prajapati', 2000);
//console.log(Abhinav.fullName);
