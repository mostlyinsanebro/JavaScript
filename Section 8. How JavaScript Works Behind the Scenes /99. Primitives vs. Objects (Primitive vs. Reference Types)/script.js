"use strict";

// Here, the age is pointing to a memory address in call stack that stored value 23.
let age = 23;

// Here, we created another variable which points to the same memory as age in call stack.
let oldAge = age;

// Here, we are changing the value of age variable to 24, so what will happen here is that the
// age variable will now start pointing a different address in memory storing the value 24.
age = 24;

// The reason is that the value stored on an address is immutable and due to this reason, 23 will be attached to
// that address only. If value of variable changes, then thye address that the variable points to will ave to change
// and not the value on the previous address.

console.log(age);
console.log(oldAge);

const me = {
  name: "Abhi",
  age: 23,
};

const friend = me;
friend.age = 28;

console.log(me.age);
console.log(friend.age);

// Here, we expected the result to be just like the primitive values that friend.age will be 28 and me.age will be 23.
// But, what happens is that the objects are stored in heap memory and variables points to an address in call stack which in
// turn point to the address of that object in heap.

// So, when we try to change the property of an object, it changes in the actual object and the call stack will
//  keep pointing to the same memory and thus values are changed for all the variables pointing to that object.

// NOTE :- const are immutable only in the case of primitives like Number, String, BigInt,Boolean, Undefined, Null, Symbol.

// but they are not technically immutable in case of reference types like arrays, functions, objects literals etc.
