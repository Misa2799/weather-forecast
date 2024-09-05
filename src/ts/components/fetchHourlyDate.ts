import { WeatherData } from "../type/WeatherData.js";
import { config } from "../../apiKey.js";

const apiKey: string = config.apiKey;

let splittedCity: string = "";

export async function fetchHourlyDate(city: string): Promise<WeatherData> {
  if (city == "") {
    const citySearchElement: HTMLElement | null =
      document.querySelector("#citySearch");

    if (citySearchElement) {
      const cityArr: string[] = (
        citySearchElement as HTMLInputElement
      ).value.split(",");
      splittedCity = cityArr[0];
      console.log("splittedCity", splittedCity);
    } else {
      console.error("Please enter a city name");
    }
  }

  const forecastUrl: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
