// Strings are a useful way to write a series of characters.
// In earlier JS versions, only simple string was there which had some limitations
// which the template literal (strings enclosed in backticks ``) solved. This was introduced in ES6.

const firstName = 'Abhi';
const job = 'programmer';
const dateOfBirth = 2000;
const year = 2023;

let abhi = "I'm "+ firstName +" , a "+(year-dateOfBirth) +" years old "+ job +"!";
console.log(abhi);

/* In the old string, we must take care of what quotes to use but in template literal, we can use any quotes without any problem and we can also write our whole string as one, no need to take care of spaces */

let newAbhi = `I'm ${firstName} , a ${year - dateOfBirth} years old ${job}!`;
console.log(newAbhi);

/* We can also put our string in new line in template literal without any special characters*/

console.log(`Just a regular string...`);

console.log('String with \n\
new lines \n\
in it.');

// With template literal, we can write it very easily and will be used in a lot of places.
console.log(`String with
new lines
in it.`);
