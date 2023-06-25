// strict mode is basically a special mode in JS which is used to write a secure js code.
// secure means developers would be able to identify bugs in the code more easily and also would not be able to use 
// some keywords that may be used in the future , as variable names like private, interface etc.


// Below is an example for it.

'use strict';

let hasDriversLicense = false; 
// We would not be able to catch this hasDriverLicense error in the browser w/o the strict mode.
const passedTest = true;

if(passedTest) hasDriversLicense = true;

if(hasDriversLicense)
console.log('Horray! You can drive now');

let interface = 100;
// w/o the strict mode, we would not get the reserved for future error for this variable name as well.
