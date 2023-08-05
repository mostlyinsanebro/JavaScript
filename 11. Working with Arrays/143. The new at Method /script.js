// This at method is used for extracting value from a position in array which [] are used for.


let arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);

// getting the last element in an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at is also used to get element based on index from strings as well.

let str = "Abhinav";
console.log(str.at(0));
console.log(str.at(-1));
