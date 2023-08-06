// Callback functions are basically the functions that are passed as arguments to other functions.
// TIt is done in order to control when to call a function in another function
// suppose we want to call a function 2 after a file has been loaded in function1, then we use
// function2 as a callback function in function1. When the file has been loaded successfully,
// the line calling the function2 will be executed then.

// TRAVERSING AN ARRAY USING forEACH
// forEACH function can use another callback function which can take three arguments
// arrayElement, index, whole array.

const movements = [11000, -4000, 3000, -400, 2100, -900, 47000];

// USING FOR LOOP
for (let i = 0; i < movements.length; i++) {
  console.log(movements[i] + " ");
}

// USING forEACH loop
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`${index} Credited ${movement}`);
  } else {
    console.log(`${index} Debited ${Math.abs(movement)}`);
  }
});
