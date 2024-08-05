// import { WeatherData } from "../type/WeatherData.js";
export function displayCurrentData(_currentData) {
    // DOM
    const currentTempNum = document.querySelector(".currentTempNum");
    const titleCityName = document.querySelector(".titleCityName");
    const weatherImage = document.querySelector(".weatherImg");
    const currentTime = document.querySelector(".weatherTime");
    // clear all primary data
    if (currentTempNum)
        currentTempNum.textContent = "";
    if (titleCityName)
        titleCityName.textContent = "";
    if (weatherImage)
        weatherImage.textContent = "";
    if (currentTime)
        currentTime.textContent = "";
    // replace data
    if (titleCityName)
        titleCityName.textContent = _currentData.name;
    if (currentTempNum)
        currentTempNum.textContent = Math.round(_currentData.main.temp - 273.15).toString();
    const hTime = (_currentData.dt + _currentData.timezone) * 1000;
    const setDateTime = new Date(hTime);
    if (currentTime)
        currentTime.textContent = setDateTime.toString();
    const iconCode = _currentData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    if (weatherImage)
        weatherImage.src = iconUrl;
}
//# sourceMappingURL=displayCurrentData.js.map