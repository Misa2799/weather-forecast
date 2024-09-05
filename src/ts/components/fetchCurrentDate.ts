import { CurrentData } from "../type/CurrentData.js";
import { config } from "../../apiKey.js";

const apiKey: string = config.apiKey;

export async function fetchCurrentDate(city: string): Promise<CurrentData> {
  const forecastUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
