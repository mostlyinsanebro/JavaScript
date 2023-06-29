// There are various built-in methods used for arrays in JS. 

const friends = ['Akshat','Manuj','Harshit'];
console.log(friends);

// Adding an element to an array

// push() :- Adds an element to the last of an array and returns the size of array.
const arrayLength = friends.push('Deepanshi');
console.log(friends);
console.log('length of array '+arrayLength);

// unshift() :-Adds an element to the starting of an array and return array length.
const arrayLength1 = friends.unshift('Chiku');
console.log(friends);
console.log('Length of array '+arrayLength1);


// Removing an element from an array

// pop ():- Removes an element from the end of an array and returns the removed element.
const removedElement = friends.pop();
console.log(friends);
console.log(removedElement);


// shift ():- Removes an element from the start of an array and returns the removed element.
const removedElement1 = friends.shift();
console.log(friends);
console.log(removedElement1);

// indexOf() :- returns the index of an element from an array and returns -1 if element is 
// not present in array.
console.log(friends.indexOf('Manuj'));

// indexOf() does a strict equality check.
friends.push(23);
console.log(friends.indexOf('23'));


// includes() :- this returns true if element is present in an array and returns false if 
// it is not present. Does strict equality check.Does not do type coercion.

console.log(friends.includes('Manuj'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if(friends.includes('Akshat'))
{
    console.log('You have a friend named Akshat');
}


