import { config } from "../apikey.js";
const apiKey = config.apiKey;
// console.log("apiKey", apiKey);
// let splittedCity: string = "";
//START fetch api
export async function fetchCurrentDate(city) {
    // fetch
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(forecastUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
}
//END fetch api
//# sourceMappingURL=fetchCurrentDate.js.map