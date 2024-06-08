"use strict";

import { fetchWeatherDate } from "./defaultData/defaultWeatherData.js";

// START section top dropdown btn
// function topDropdownFavo() {
//   document.getElementById("topDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".btnDropdown")) {
//     const dropdowns = document.getElementsByClassName("dropdownContent");
//     for (let i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
// END section top dropdown btn

let city: string = "hiroshima";
fetchWeatherDate(city)
  .then((data) => {
    if (data.list.length > 0) {
      const defaultForecast = data.list[0];
      console.log("defaultForecast", defaultForecast);
    } else {
      console.log("No forecast data available.");
    }
  })
  .catch((error) => {
    console.error(error);
  });
