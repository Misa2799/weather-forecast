import { config } from "../apikey.js";
import { CurrentData } from "../type/CurrentData.js";

const apiKey: string = config.apiKey;

//START fetch api
export async function fetchCurrentDate(city: string): Promise<CurrentData> {
  // fetch
  const forecastUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
//END fetch api
