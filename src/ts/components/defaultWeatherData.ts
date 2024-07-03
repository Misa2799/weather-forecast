import { config } from "../apikey.js";
import { WeatherData } from "../type/WeatherData.js";

const apiKey: string = config.apiKey;
// console.log("apiKey", apiKey);
// let splittedCity: string = "";

//START fetch api
export async function fetchWeatherDate(city: string): Promise<WeatherData> {
  // if (city == "") {
  //   const citySearchElement: HTMLElement | null =
  //     document.getElementById("citySearch");

  //   if (citySearchElement) {
  //     const cityArr: string[] = (
  //       citySearchElement as HTMLInputElement
  //     ).value.split(",");
  //     splittedCity = cityArr[0];
  //     console.log("splittedCity", splittedCity);
  //   } else {
  //     console.error("Please enter a city name");
  //   }
  // }

  // API Call
  // const forecastUrl: string = `https://api.openweathermap.org/data/2.5/forecast?q=${splittedCity}&appid=${apiKey}`;

  // fetch test
  const forecastUrl: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
//END fetch api
