document.getElementById("reset").onclick = clearform;

let celsius = document.getElementById ("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let kelvin = document.getElementById("kelvin")


function celsiusTemperatureConvert () {
    let outputFahrenheit = (parseFloat(celsius.value)*9/5) + 32;
    fahrenheit.value = parseFloat(outputFahrenheit.toFixed(2));

    let outputKelvin = (parseFloat(celsius.value) + 273);
    kelvin.value = parseFloat(outputKelvin.toFixed(2))
}

function fahrenheitTemperatureConvert () {
    let outputCelsius = (parseFloat(fahrenheit.value) - 32) *5/9;
    celsius.value = parseFloat(outputCelsius.toFixed(2));

    let outputKelvin = (parseFloat((fahrenheit.value)- 32)*5/9) + 273;
    kelvin.value = !!Number(fahrenheit.value)? parseFloat(outputKelvin.toFixed(1)) : ""
}

function kelvinTemperatureConvert() {
    let outputCelsius = (parseFloat(kelvin.value) - 273);
    celsius.value = parseFloat(outputCelsius.toFixed(2));

    let outputFahrenheit = (parseFloat((kelvin.value)-273)*9/5) + 32;
    fahrenheit.value = !!Number(kelvin.value)? parseFloat(outputFahrenheit.toFixed(2)) : ""
}

function clearform() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
}
