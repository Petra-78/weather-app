import { getData, checkWeather } from "./logic";

//DOM

const search = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather();
} )


function changeDom(loc, temp, minmax, hum, wind) {
const location = document.querySelector(".location")
const currentTemp = document.querySelector(".current-temp")
const minMaxTemp = document.querySelector(".min-max-temp")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".windspeed")

location.textContent = loc
currentTemp.textContent = temp
minMaxTemp.textContent = minmax
humidity.textContent = hum
windSpeed.textContent = wind
}