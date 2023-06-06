/*
An operator allows us to transform values and combine multiple values in various forms like addition, concatenation, etc.
*/

// Mathematical operators.
let now = 2045;
const ageAbhi = now - 2000;
const ageNidhi = now - 1995 ; 

console.log(ageAbhi, ageNidhi);


console.log(ageAbhi*2, ageAbhi/10,2**3);
// 2**3 means 2 to the power 3 i.e. 2 * 2 * 2

//Concatenation operator.
const firstName = 'Abhinav';
const lastName = 'Prajapati';
console.log(firstName+" "+lastName);

//Assignment Operator.
let x = 15 + 5;
x+=10 // x= x+10;
x*=4; // x= x*4;
x++; // x = x+1;
x--; // x= x-1;
x--; 
console.log(x);


// Comparison Operators
console.log(ageAbhi >= ageNidhi); // >, < , >=, <=, ==
console.log(ageAbhi >= 18);

const isFullAge = ageAbhi >= 18;

console.log('isFullAge ' + isFullAge);

console.log(now - 2000 > now - 1995);// how does js know this, find out

// Note:- The browser stores all the variables of our js code file, so we can do things that we can do in our code,
// in the browser directly.
