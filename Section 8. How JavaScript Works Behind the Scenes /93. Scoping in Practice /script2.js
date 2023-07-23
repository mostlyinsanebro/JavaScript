'use strict';

// let and const are function scoped and var is block scoped in js.
function calcAge(birthYear){
    const age = 2037 - birthYear;

    

    
    function printAge(){
        let output = `${firstName}, you are ${age}, 
born in ${birthYear}.`;

         console.log(output);
    


    if(birthYear>=2000 && birthYear<= 2010){
        // Creating new variable with same name as gloabl scope's variable
        const firstName = 'Abhi';


        // Reassigning value to outer scope's variable.This will change the value of the variable.
        output = 'NEW OUTPUT!';

        const str = `${firstName}, you are a gen Z`;
        var genZ = 'genZ';
        
        

        console.log(str);

        function add(a,b)
        {
            return a+b;
        }
    }


    // console.log(str); // Reference error because const is block- scoped and is not valid here.
    console.log(genZ); // This will work fine because the genZ variable a var and is not block-scoped, it's scope is 
                      // in the whole calcAge().

    console.log(output);
}
    printAge();
    // console.log(add(2,3));  will give error because functions are also block-scoped in strict mode, w/o strict mode they are not block-scoped but function-scoped.
    return age;
}

const firstName = 'Abhinav';
calcAge(2000);


// Functions are also block-scoped but only in strict mode.

// The variable lookup does not happen if the variable we are looking for is in the same scope already.
