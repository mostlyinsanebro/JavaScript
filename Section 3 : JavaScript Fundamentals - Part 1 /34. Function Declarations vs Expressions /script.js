'use strict';
// There are two ways to write functions in js 
// Function declaration and function expressions


// Function Declaration
console.log(calcAge1(2000));

function calcAge1(birthYear) 
{
    return 2037 - birthYear;
}



// Function expression
const calcAge2 = function (birthYear) // anonymous function
{
    return 2037 - birthYear;
}
console.log(calcAge2(2000));


// Function expression basically is an expression
// and expressions return a value which will then be stored in a variable -> calcAge2.

// calcAge2 will just hold a value, and in js functions are just values which can be stored in variables.




// There is a main difference in function declaration and function expressions.
// Functions declarations can be called even before they are defined in the code and it will work fine due to 
// a concept called hoisting.

// Function expressions can not be used before they are declared in code.


