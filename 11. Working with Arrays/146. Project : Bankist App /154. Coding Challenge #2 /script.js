"use strict";

const calcAverageHumanAge = function (ages) {
  const ageInHumanYears = ages.map(function (val, idx) {
    if (val <= 2) {
      return 2 * val;
    } else {
      return 16 + val * 4;
    }
  });

  console.log(ageInHumanYears);

  const adultDogs = ageInHumanYears.filter(function (val, idx) {
    if (val >= 18) return val;
  });

  console.log(adultDogs);

  const sumAges = adultDogs.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  console.log(sumAges);

  const avgAge = sumAges / adultDogs.length;
  console.log(avgAge);
};
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
