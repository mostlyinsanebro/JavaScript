// 1. Understand the problem
// We will be given an array and we have to create and return the desired string out of it.

// 2. Divide (Smaller problems)
// Write function
// concatenate the string from the last iteration at the starting of current string.
// return the string.


// 3. Research
// how to concatenate strings in js (+)


// Solution:-
const printForecast = function (arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result = result + `... ${arr[i]}'C in ${i + 1} days `;
  }
  result = result + '...';
  return result;
};

console.log(printForecast([12, 5, -5, 0, 4]));
