// Find the temperrature amplitude of a temp array

const calctempAmplitude = function (temps1, temps2) {
  const temps3 = temps1.concat(temps2);
  console.log(temps3);
  let max = temps3[0];
  let min = temps3[0];

  for (let i = 0; i < temps3.length; i++) {
    if (typeof temps3[i] !== 'number') continue;

    if (temps3[i] > max) max = temps3[i];

    if (temps3[i] < min) {
      min = temps3[i];
    }
  }

  return max - min;
};

console.log(calctempAmplitude([0, 7, 4], [9, 5, 8]));
