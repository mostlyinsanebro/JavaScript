// for Each for Maps

const mapdesc = new Map([
  ["USD", "United States Currency"],
  ["EUR", "Europen Currency"],
  ["INR", "Indian Currency"],
]);

mapdesc.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});


// forEACH with sets
const setdesc = new Set(["USD", "INR", "EUR", "USD", "EUR", "INR"]);

// It prints only unique values.
console.log(setdesc);

// The signature for callback function is same in the forEach fucntion for a set
// as it is in the map.
setdesc.forEach(function (value, key, set) {
  console.log(`${value}`);
});
