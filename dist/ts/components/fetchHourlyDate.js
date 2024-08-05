import { config } from "../apikey.js";
const apiKey = config.apiKey;
let splittedCity = "";
//START fetch api
export async function fetchHourlyDate(city) {
    if (city == "") {
        const citySearchElement = document.querySelector("#citySearch");
        if (citySearchElement) {
            const cityArr = citySearchElement.value.split(",");
            splittedCity = cityArr[0];
            console.log("splittedCity", splittedCity);
        }
        else {
            console.error("Please enter a city name");
        }
    }
    // API Call
    // const forecastUrl: string = `https://api.openweathermap.org/data/2.5/forecast?q=${splittedCity}&appid=${apiKey}`;
    // fetch
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await fetch(forecastUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
}
//END fetch api
//# sourceMappingURL=fetchHourlyDate.js.map