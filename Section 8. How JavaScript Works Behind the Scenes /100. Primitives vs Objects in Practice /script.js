// PRIMITIVE TYPES
let lastName = "Prajapati";
let oldlastName = lastName;
// At this point, both these are pointing to the same memory location in stack.

lastName = "Dhuran";
// Here, lastName started pointing to a new memory location which contains 'Dhuran'.
// This is how primitives work in js.

console.log("Old Last Name : " + oldlastName);
console.log("New Last Name : " + lastName);

// REFERENCE TYPES
const nidhu = {
  firstName: "Sunidhi",
  lastName: "Prajapati",
  age: 28,
};

const marriedNidhu = nidhu;
marriedNidhu.lastName = "Dhuran";

console.log("Before marriage : " + nidhu.lastName);
console.log("After marriage  : " + marriedNidhu.lastName);

// We expected that the last name of married Nidhu will be changed to Dhuran and the last name of Nidhu will remain
// Prajapati but that did not happen because both the nidhu and marriedNidhu variables point to a memory location in stack
// which then points to a memory location in heap which stores this object.

// When we make change to the object in heap, we are not changing the memory loaction in stack which is immutable due to const
// and thus both these variables keep pointing to the same memory location of the object and thus the change to object reflect
// in both the variables.

// Assigning a new object to a variable is completely different from changing a property of an object.

// marriedNidhu = {};
// This will give error brcause we are assigning a new object with a completely different than before to a const variable
// and the memory address that points to will also have to change that js does not allow. So, this will not work.

// COPYING OBJECTS
const nidhu2 = {
  firstName: "Sunidhi",
  lastName: "Prajapati",
  age: 28,
};

const nidhuCopy = Object.assign({}, nidhu2);
// Object.assign merges two objects and return a new merged object, we can create a rea; copy of an object
// using this.

nidhuCopy.lastName = "Dhuran";

console.log("Before marriage : " + nidhu2.lastName);
console.log("After marriage  : " + nidhuCopy.lastName);

// Here, the nidhuCopy has the lastName as 'Dhuran' and nidhu2.lastName has lastName as 'Prajapati' and thus we can see
// than an actual copy has indeed been created for the nidhu Object.

// But, there is a problem with this because Object.assign only creates the copy of an object on the firstLevel
// and does not create a deep clone for an object.
// If we have an object inside an object, then creating the copy of object will create a shallow copy of object
// i.e. the outer object will be copied only but copy for inner object is not created and it still points to the
// same memory loction for both the objects.

const abhi = {
  lastName: "Prajapati",
  cities: ["Jagadhri", "Dehradun"],
};

const employedAbhi = Object.assign({}, abhi);
employedAbhi.cities.push("Gurgaon");

// Here, the cities for both the abhi's should be different but they are not because even though we have copied the object
// a deep clone has not been created for the object and inner objects still point to the same memory loaction for both
// the objects.

console.log("Student Abhi lived in Cities : " + abhi.cities);
console.log("Employed Abhi lived in cities : " + employedAbhi.cities);
