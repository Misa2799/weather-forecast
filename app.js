"use strict";

//API key
const WEATHER_API_KEY = config.apikey;
console.log(WEATHER_API_KEY);

// START section top dropdown btn
function topDropdownFavo() {
  document.getElementById("topDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".btnDropdown")) {
    const dropdowns = document.getElementsByClassName("dropdownContent");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// END section top dropdown btn
