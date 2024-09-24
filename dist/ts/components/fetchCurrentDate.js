import { config } from "../../apiKey.js";
const apiKey = config.apiKey;
export async function fetchCurrentDate(city) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(forecastUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
}
//# sourceMappingURL=fetchCurrentDate.js.map