import { displayCurrentData } from "./displayCurrentData.js";
import { displayHourlyData } from "./displayHourlyData.js";
import { fetchCurrentDate } from "./fetchCurrentDate.js";
import { fetchHourlyDate } from "./fetchHourlyDate.js";

export function searchCityWeather(city: string) {
  fetchCurrentDate(city)
    .then((data) => {
      if (data) {
        const defaultForecast = data;
        displayCurrentData(defaultForecast);
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch((error) => {
      throw new Error("Something went wrong", error);
    });

  fetchHourlyDate(city)
    .then((data) => {
      if (data) {
        const hourlyData = data;
        displayHourlyData(hourlyData);
      }
    })
    .catch((error) => {
      throw new Error("Something went wrong", error);
    });
}
