/* 
let, const, and var are three different ways of declaring variables in js.

let and const were introduced in ES6, so they are a part of modern js but var is the old way of declaring variables in js.

let => It is used to declare variables that can change later i.e. during the execution of our program. It is used to create mutable (changeable) or empty variables. 
*/

let age ; // empty variable
console.log(age);
age = 30;
console.log(age);
age = 31;
console.log(age);


/*
const => It is used to declare the variable whose value can not be changed in the future or an immutable variable.
*/
const birthYear = 2000;
console.log(birthYear);

/* We also can not create empty const variables.
birthYear = 2001; // will give assignment to constant variable error.

const a;// Missing initializer in const declaration
*/

/* 
We should use const by default, use 'let' only when you are sure that it will change in the future. It is good to have as few variable mutations as we can in the code.
*/

/* 
var => It should be avoided. It is the old way of defining variables in js and works pretty much the same as let. It is also mutable.We should never use var. 
*/

var a = 'abhi';
console.log(a);

a = 'sunidhi';
console.log(a);

/*
We can also use variables w/o declaring them in js but do not do it, it is not a good practice and there is also a reason behind it/
*/
javaScript = 'FUN';

console.log(javaScript);
