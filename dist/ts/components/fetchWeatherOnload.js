import { displayCurrentData } from "./displayCurrentData.js";
import { displayHourlyData } from "./displayHourlyData.js";
import { fetchCurrentDate } from "./fetchCurrentDate.js";
import { fetchHourlyDate } from "./fetchHourlyDate.js";
let city = "hiroshima";
export function fetchWeatherOnload() {
    fetchCurrentDate(city)
        .then((data) => {
        if (data) {
            const defaultForecast = data;
            displayCurrentData(defaultForecast);
        }
        else {
            console.log("No forecast data available.");
        }
    })
        .catch((error) => {
        console.error(error);
    });
    fetchHourlyDate(city)
        .then((data) => {
        if (data) {
            const hourlyData = data;
            displayHourlyData(hourlyData);
        }
    })
        .catch((error) => {
        console.error(error);
    });
}
//# sourceMappingURL=fetchWeatherOnload.js.map