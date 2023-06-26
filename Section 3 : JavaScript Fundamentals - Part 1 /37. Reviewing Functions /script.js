const calcAge = function (birthYear)
{
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear,firstName)
{
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement>0)
    {
    console.log(`${firstName} retires in ${retirement} years.`);
     return retirement;
     
    }
    else
    {
        console.log(`${firstName} has already retired.`);
        return -1; 
    }
}


console.log(yearsUntilRetirement(2000,'Abhinav'));
console.log(yearsUntilRetirement(1950,'Mike'));



// So, we have three types of functions.
// 1. Function declaration
function calcAge(birthYear)
{
    return 2037 - birthYear;
}

// These can be used in the code before they are even declared due to a concept known as hoisting.

// 2. Function expression
const calcAge = function (birthYear)
{
    return 2037 - birthYear; // return returns value and also terminates function execution.
} 

// These are esentially function values that are stored in variables.



// 3. Arrow functions
const calcAge = birthYear => 2037 - birthYear;

// These are special type of function expressions that are great for quick one-line functions.
// They have no this keywords.

// All these function types work in a similar way, they recieve input data, transform data and 
// then output data.



