// There are basically two ways of retrieving values from objects in js.
// 1. Dot(.) Notation -> used in case we know the exact property we want to get from object.

// 2. Brackets -> used in case we want to get a property from object which is computed before
// retrieving. Also, we get undefined in case we try to get a property which is not there in the object.

let abhi = {
    firstName : 'Abhinav',
    lastName  : 'Prajapati',
    age       : 2037 - 2000,
    job       : 'Software Developer',
    friends    : ['Chiku','Akshat','Manuj','Harshit']
};


console.log(abhi.age);

console.log(abhi.firstName);

const nameKey = 'Name';

console.log(abhi['first' + nameKey]);
console.log(abhi['last'+nameKey]);

// The brackets notation expects a expression within them whose value is first evaluated
// and after that, that the value is retrieved from the object.


// It is not the case with . notation.
// console.log(abhi.'first'+Name); -> gives error


const intrestedIn = prompt('Enter the value you want to know about Abhinav -> firstName, lastName , age, job and friends');
console.log(abhi[intrestedIn]);


// Add values to an object
abhi.location = 'Gurugram';
abhi['insta_handle'] = '_abhinav_abhinav_2';
console.log(abhi);

// Challenge
// Abhinav has 4 friends and his best friend is Chiku.

console.log(`${abhi.firstName} has ${abhi.friends.length} friends and his best friend is ${abhi.friends[0]}`)
