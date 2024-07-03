import { WeatherData } from "../type/WeatherData.js";

export function displayDefaultData(_weatherData: WeatherData) {
  // DOM
  const currentTempNum: HTMLParagraphElement | null =
    document.querySelector(".currentTempNum");
  const tempHigh: HTMLParagraphElement | null =
    document.querySelector(".tempHigh");
  const tempLow: HTMLParagraphElement | null =
    document.querySelector(".tempLow");
  const titleCityName: HTMLParagraphElement | null =
    document.querySelector(".titleCityName");
  const weatherImage: HTMLImageElement | null =
    document.querySelector(".weatherImage");
  const weatherDay: HTMLParagraphElement | null =
    document.querySelector(".weatherDay");

  // clear all primary data
  if (currentTempNum) currentTempNum.textContent = "";
  if (tempHigh) tempHigh.textContent = "";
  if (tempLow) tempLow.textContent = "";
  if (titleCityName) titleCityName.textContent = "";
  if (weatherImage) weatherImage.textContent = "";
  if (weatherDay) weatherDay.textContent = "";

  let city: string = "hiroshima";
  const capitalizedCityName = city.charAt(0).toUpperCase() + city.slice(1);
  if (titleCityName) titleCityName.textContent = capitalizedCityName;
  if (currentTempNum)
    currentTempNum.textContent = Math.round(
      _weatherData.list[0].main.temp - 273.15
    ).toString();
  if (tempHigh)
    tempHigh.textContent = Math.round(
      _weatherData.list[0].main.temp_max - 273.15
    ).toString();
  if (tempLow)
    tempLow.textContent = Math.round(
      _weatherData.list[0].main.temp_min - 273.15
    ).toString();
  const iconCode = _weatherData.list[0].weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  if (weatherImage) weatherImage.src = iconUrl;
}
