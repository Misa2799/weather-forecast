import { fetchHourlyDate } from "./components/fetchHourlyDate.js";
import { displayCurrentData } from "./components/displayCurrentData.js";
import { fetchCurrentDate } from "./components/fetchCurrentDate.js";
import { topDropdownFavo } from "./components/favBtn.js";
import { displayHourlyData } from "./components/displayHourlyData.js";

const dropdownBtn = document.querySelector(".btnDropdown");
dropdownBtn?.addEventListener("click", topDropdownFavo);

let city: string = "hiroshima";
fetchCurrentDate(city)
  .then((data) => {
    if (data) {
      const defaultForecast = data;
      displayCurrentData(defaultForecast);
    } else {
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
