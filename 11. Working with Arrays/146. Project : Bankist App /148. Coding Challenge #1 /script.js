// Create a shallow copy of Julia array.
const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

function checkDogs(Julia, Kate) {
  let JuliaCopy = Julia.slice();

  // Remove last two elements from JuliaCopy
  JuliaCopy.splice(0, 1); // removes the first element from array
  JuliaCopy.splice(-2);
  console.log(JuliaCopy);

  // Merge the two arrays
  let finalArray = JuliaCopy.concat(Kate);

  // Now, traverse through the array and print whether this numbered dog is a
  // dog or puppy.

  finalArray.forEach(function (elem, idx) {
    if (elem < 3) {
      console.log(`Dog number ${idx + 1} is still a puppy.`);
    } else {
      console.log(
        `Dog number ${idx + 1} is an adult, and is ${elem} years old.`
      );
    }
  });
}

checkDogs(Julia, Kate);
