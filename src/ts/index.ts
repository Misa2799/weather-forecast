"use strict";

import { fetchWeatherDate } from "./components/defaultWeatherData.js";
import { displayDefaultData } from "./components/displayDefaultData.js";

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

// let splittedCity: string = "";

// function captureCity(city) {
//   const citySearchElement: HTMLElement | null =
//     document.getElementById("citySearch");

//   if (citySearchElement === "")
// }

// if (splittedCity == "" || "hiroshima") {
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

let city: string = "hiroshima";
fetchWeatherDate(city)
  .then((data) => {
    if (data.list.length > 0) {
      // const defaultForecast = data.list[0];
      const defaultForecast = data;
      console.log("defaultForecast", defaultForecast);
      displayDefaultData(defaultForecast);
    } else {
      console.log("No forecast data available.");
    }
  })
  .catch((error) => {
    console.error(error);
  });
