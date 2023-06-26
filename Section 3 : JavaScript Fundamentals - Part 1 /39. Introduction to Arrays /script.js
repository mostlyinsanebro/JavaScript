// Arrays are used to store multiple values and point to them using a single variable.

const friends = ['Michael','Steven','Peter'];
console.log(friends);

console.log(friends[friends.length-1]);

friends[2]='Jay';
console.log(friends);

// An interesting thing to notice here is that friends is a const. but still we are able to change it
// Non-primitive values are not immutable in js.

// can do this
friends[0]='A';
friends[1]='B';
friends[2]='C';
console.log(friends);


// can not do this
// friends = ['d','e','f'];
// console.log(friends);


friends[0]='Manuj';
friends[1]='Akshat';
friends[2]='Rishi';

//We can mutate arrays even though they are declared with const but we can not replace the whole array
// if it is declared with const keyword.
// let keywords allows this but.


// In js, array can hold different types of values all at the same time.
// At each index position, js simply expects an expression and not a string or number etc.
// We can also put other arrays inside of an array. 

const firstName = 'Abhinav';
const abhi = [firstName, 'Prajapati',2023 - 2000, friends];
console.log(abhi);

// Small exercise 
const years = [1995,2000,2003,2007,1998];

const calcAge = function (birthYear) 
{
    return 2023- birthYear;
}


const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);

// we can also declare arrays in the following way.

let y = new Array(1,2,3,`abhinav`,2023-2000,calcAge(years[0]));
console.log(y);
