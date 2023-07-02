const measureKelvin = function () {
  const measurment = {
    typr: 'temp',
    unit: 'kelvin',
    value: Number(prompt(`Enter temperature in Celsius`)),
  };

  // console.log(typeof measurment.value);
  // console.log(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());
