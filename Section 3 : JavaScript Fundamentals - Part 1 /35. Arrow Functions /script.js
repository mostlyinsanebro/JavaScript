// Arrow fuctions are basically another way of writing functions in js. They are speacial form of 
// function expressions.

// Arrow functions can be used when we have a single input parameter and a single line of code
// returning something as it does not have a return statement in that case.
// In other scenarios, arrow functions become just like function expressions.

// Also, arrow functions does not have this reference keyword in them.


// Arrow function with single input parameter and single line of code which is a  return statement.
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(2000));

// calcAge3 is the variable referencing the function, birthYear is the input variable and the single line of 
// code is the return statement.


// Arrow function with single input parameter and more than one line of code and a return statement.
const yearsUntilRetirement1 = birthYear => 
{
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   return retirement;
}


console.log(yearsUntilRetirement1(2000));


// Arrow function with more than one input parameter and more than one line of code with a return statement.
const yearsUntilRetirement2 = (birthYear,firstName) =>
{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}


console.log(yearsUntilRetirement2(2000,'Abhinav'));



