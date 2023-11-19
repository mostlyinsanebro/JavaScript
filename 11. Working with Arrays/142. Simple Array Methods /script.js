// Methods are simply functions attached to Objects.


// SLICE METHOD
// It is used to slice an array means taking a slice/part from an array and return the slice array.
// but it does not affect the original array.


let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
// this will slice the array starting from starting index position to last index of array.

console.log(arr.slice(1, 2));
// will slice starting from index start index 1 to end index 2, will not include 2.

console.log(arr.slice(-2));
// gives last 2 elements from array

console.log(arr.slice(-1));
// returns last index value

console.log(arr.slice(1, -2));
// starts extracting at 1 and extracts everything except the last 2 elements.

// for creating a shallow copy of an array
console.log(arr.slice());

// SPLICE Method
// It is used to slice an array but it makes change to the original array itself.

console.log(arr.splice(-1));

console.log(arr);

// splice is generally used when when we want to delete elements from an array.
// arr.splice(-1)

// if we want to delete a part of an array, do
console.log(arr.splice(1, 2));

// will start deleting from index 1 and will go include the next 2 elements in deletion.
console.log(arr);

// REVERSE Method
// It makes change to the original array.
// It simply reverses an array. Also returns an array

let arr2 = ["d", "c", "b", "a"];
console.log(arr2.reverse());

console.log(arr2);

// CONCAT Method
// Used to join two arrays. also returns array as result

let letters = arr2.concat(arr);
console.log(letters);

// JOIN Method
// Used to join each element of an array and returns a string.

let joined = letters.join("-");
console.log(joined);
