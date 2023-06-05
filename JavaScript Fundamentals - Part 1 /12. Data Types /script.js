//single line comments

/* multi-line
comments*/

// Every value in javascript is either an object or a primitive value. A value is primitive only when it is not an object.

/*Javascript is dynamically typed.
Variables simply store values that have a type. The values have data types and not variables.*/

let isJavaScriptFun = true;
console.log(isJavaScriptFun);

isJavaScriptFun = 'YES!';
console.log(typeof isJavaScriptFun);

let children;

console.log(typeof true);
console.log(typeof isJavaScriptFun);
console.log(typeof 23);
console.log(typeof 'Jonas');


console.log(children);
console.log(typeof children); // value and typeof children is undefined.We have not defined a value in a variable.

// dynamic typing simply means that we can change the type of value that the variable holds.


console.log(typeof null); // value and typeof null is object.
/*This is a bug since the first release of ECMAScript which unfortunately can’t be fixed because it would break the existing code.*/
