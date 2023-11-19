const convertToCelsius = function(temperature) {

  let exactTemperature = ((temperature - 32) * 5/9);
  let roundTemperature = (Math.round(exactTemperature * 10)/10);

  return roundTemperature;

};

const convertToFahrenheit = function(temperature) {

  let exactTemperature = ((temperature * 9/5) + 32);
  let roundTemperature = (Math.round(exactTemperature * 10)/10);

  return roundTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
