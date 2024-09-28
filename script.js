function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;

  let temperatureInCelsius;

  if (inputUnit === "Celsius") {
    temperatureInCelsius = inputTemperature;
  } else if (inputUnit === "Fahrenheit") {
    temperatureInCelsius = (inputTemperature - 32) * 5 / 9;
  } else if (inputUnit === "Kelvin") {
    temperatureInCelsius = inputTemperature - 273.15;
  }

  let outputTemperature;
  if (outputUnit === "Celsius") {
    outputTemperature = temperatureInCelsius;
  } else if (outputUnit === "Fahrenheit") {
    outputTemperature = (temperatureInCelsius * 9 / 5) + 32;
  } else if (outputUnit === "Kelvin") {
    outputTemperature = temperatureInCelsius + 273.15;
  }

  document.getElementById("outputTemperature").innerText = outputTemperature.toFixed(2) + " " + outputUnit;
}
