import { fetchWeatherDate } from "./components/fetchWeatherDate.js";
import { displayDefaultData } from "./components/displayDefaultData.js";
import { fetchCurrentDate } from "./components/fetchCurrentDate.js";
import { topDropdownFavo } from "./components/favBtn.js";

const dropdownBtn = document.querySelector(".btnDropdown");
dropdownBtn?.addEventListener("click", topDropdownFavo);

let city: string = "hiroshima";
fetchCurrentDate(city)
  .then((data) => {
    if (data) {
      const defaultForecast = data;
      displayDefaultData(defaultForecast);
    } else {
      console.log("No forecast data available.");
    }
  })
  .catch((error) => {
    console.error(error);
  });

fetchWeatherDate(city).then((data) => {
  if (data) {
    const hourlyRange = data;
    console.log("hourlyRange:", hourlyRange);
  }
});
