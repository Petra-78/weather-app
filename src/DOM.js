import {checkWeather } from "./logic.js";

//DOM

const search = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather();
} )


async function changeDom(loc, temp, min, max, hum, wind, icon) {
  const location = document.querySelector(".location");
  const currentTemp = document.querySelector(".current-temp");
  const weatherIcon = document.querySelector(".icon");
  const minMaxTemp = document.querySelector(".min-max-temp");
  const humidity = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".windspeed");

  location.textContent = loc;
  currentTemp.textContent = `${temp} °C`;
  minMaxTemp.textContent = `${min}° / ${max}°`;
  humidity.textContent = `${hum} %`;
  windSpeed.textContent = `${wind} km/h`;

  try {
    const iconModule = await import(`./icons/${icon}.png`);
    weatherIcon.src = iconModule.default;
  } catch (err) {
    console.error("Failed to load icon:", icon, err);
    weatherIcon.src = "./icons/clear-day.png";
  }
}


export {changeDom, search}