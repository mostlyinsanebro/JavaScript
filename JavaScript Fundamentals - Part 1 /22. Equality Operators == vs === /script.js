/* == is different from ===.
== does type coercion and therefore it is called loose comparison operator
=== does not do any type coercion and thus it is called strict operator.
*/

let age = '18';

if(age == 18)
console.log("You have become an adult (loose)");
// == first converts '18' to 18 and then compares these two values.

if(age === 18)
console.log("You have become an adult (strict)");
// === does not do any type coercion. Thus, return false as '18' string is != 18 number.



const favourite1 = prompt("Enter your favourite number");
console.log(favourite1);

console.log(typeof favourite1);

if(favourite1 == 23)
console.log(" Cool ! 23 favourite 1 is an amazing number (loose)");

if(favourite1 === 23)
console.log(" Cool ! 23 favourite 1 is an amazing number (strict)");


const favourite2 = Number(prompt("Enter your favourite number")); // converted string to number.
console.log(favourite2);

console.log(typeof favourite2);

if(favourite2 == 23)
console.log(" Cool ! 23 favourite 2 is an amazing number (loose)");

if(favourite2 === 23)
console.log(" Cool ! 23 favourite 2 is an amazing number (strict)");


// there is also if..else if..else in js.

// != not equal to (loose version of operator)
// !== not equal to (strict version of operator)
