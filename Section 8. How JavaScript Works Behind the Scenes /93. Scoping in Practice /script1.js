'use strict';


function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;
}

const firstName = 'Abhinav';
calcAge(2000);


// The firstName variable is accessible within calcAge() because firstName is there
// in the global scope and it is accessible to the function scope as well.

// The function will lookup this variable in the global scope after not finding in the function scope.

// Also, even though we have declared firstName after the function declaration, it works
// because on creation of GEC before the execution of that function and that GEC contains the 
// firstName variable which is used in the function.

// QUESTION -> WHY DOES IT GIVE ERROR???
// But the following code would not work 

/*
function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;
}

calcAge(2000);
const firstName = 'Abhinav';
*/


// because the variable being used in the calcAge() is not in the GEC engine at the time of its execution.
// It comes in the GEC after the function has been called.

