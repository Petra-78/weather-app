
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
  humidity.textContent = `Humidity: ${hum} %`;
  windSpeed.textContent = `Wind speed: ${wind} km/h`;

  changeBgc(icon)



  try {
    const iconModule = await import(`./icons/${icon}.png`);
    weatherIcon.src = iconModule.default;
  } catch (err) {
    console.error("Failed to load icon:", icon, err);
    weatherIcon.src = "./icons/clear-day.png";
  }
}

function changeBgc(icon) {
const container = document.querySelector(".container")

if (
  icon === "clear-day" ||
  icon === "partly-cloudy-day" ||
  icon === "showers-day" ||
  icon === "thunder-showers-day"
) {
  // 🟧 Orange theme
  container.style.backgroundColor = "var(--orange)";
} else if (
  icon === "rain" ||
  icon === "showers-night" ||
  icon === "sleet" ||
  icon === "rain-snow" ||
  icon === "rain-snow-showers-day" ||
  icon === "rain-snow-showers-night"
) {
  // 🔵 Blue theme
  container.style.backgroundColor = "var(--blue)";
} else if (
  icon === "cloudy" ||
  icon === "fog" ||
  icon === "wind" ||
  icon === "partly-cloudy-night" ||
  icon === "snow"
) {
  // ⚪ Grey theme
  container.style.backgroundColor = "var(--grey)";
} else if (
  icon === "clear-night" ||
  icon === "snow-showers-night" ||
  icon === "snow-showers-day" ||
  icon === "hail" ||
  icon === "thunder" ||
  icon === "thunder-rain" ||
  icon === "thunder-showers-night"
) {
  // 🔵 Dark blue theme
  container.style.backgroundColor = "var(--dark-blue)";
} else {
  // Default or fallback color
  container.style.backgroundColor = "#222"; // or any fallback you like
}
}

export {changeDom, search}