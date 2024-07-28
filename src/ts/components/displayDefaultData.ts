import { CurrentData } from "../type/CurrentData.js";
// import { WeatherData } from "../type/WeatherData.js";

export function displayDefaultData(_currentData: CurrentData) {
  // DOM
  const currentTempNum: HTMLParagraphElement | null =
    document.querySelector(".currentTempNum");
  const titleCityName: HTMLParagraphElement | null =
    document.querySelector(".titleCityName");
  const weatherImage: HTMLImageElement | null =
    document.querySelector(".weatherImg");
  const currentTime: HTMLParagraphElement | null =
    document.querySelector(".weatherTime");

  // clear all primary data
  if (currentTempNum) currentTempNum.textContent = "";
  if (titleCityName) titleCityName.textContent = "";
  if (weatherImage) weatherImage.textContent = "";
  if (currentTime) currentTime.textContent = "";

  // replace data
  if (titleCityName) titleCityName.textContent = _currentData.name;

  if (currentTempNum)
    currentTempNum.textContent = Math.round(
      _currentData.main.temp - 273.15
    ).toString();

  const hTime = (_currentData.dt + _currentData.timezone) * 1000;
  const setDateTime: Date = new Date(hTime);
  console.log("setDateTime:", setDateTime);

  if (currentTime) currentTime.textContent = setDateTime.toString();

  console.log("_currentData:", _currentData);

  const iconCode = _currentData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  if (weatherImage) weatherImage.src = iconUrl;
}
