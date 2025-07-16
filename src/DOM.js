import {checkWeather } from "./logic.js";

//DOM

const search = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather();
} )


function changeDom(loc, temp, min, max, hum, wind) {
const location = document.querySelector(".location")
const currentTemp = document.querySelector(".current-temp")
const minMaxTemp = document.querySelector(".min-max-temp")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".windspeed")

location.textContent = loc
currentTemp.textContent = `${temp} °C`
minMaxTemp.textContent = `${min}° / ${max}°`
humidity.textContent = `${hum} %`
windSpeed.textContent = `${wind} km/h`
}

export {changeDom, search}