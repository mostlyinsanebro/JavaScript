// Type conversion 

// means manually changing the type of one value to another type.

const birthYear = '1991';

// The type of birthYear can be converted to Number using Number() function.

console.log(birthYear + 18); // result is a string.

console.log(Number(birthYear) + 18); // result is a number.

// We can also convert type of number to string.
console.log(String(23));

console.log(Number('Jonas'));

console.log(typeof(NaN)); // the type of NaN is number.



// Type coercion
// It happens whenever an operator is dealing with two values that have different types.
// Js converts one value type to another value to match the types behind the scenes.

// A string seperated by a + with number retuens a string as result.

console.log('I am '+ 23 + ' years old');
// This gets converted to string.This happens due to type coercion.
// Note:- If we use + between a number and string , then result is string but if we use - , then strings are also converted to numbers and result is number.

// But type coercion does not work with all the operators.

console.log('23' - '10' - 3);// returns a number

console.log('23' + '10' + 3);// returns a string

console.log('23'*'2'); // returns a number

console.log('46'/'2'); // returns a number
