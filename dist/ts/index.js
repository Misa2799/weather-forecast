import { topDropdownFavo } from "./components/favBtn.js";
import { fetchWeatherOnload } from "./components/fetchWeatherOnload.js";
window.addEventListener("load", fetchWeatherOnload);
const dropdownBtn = document.querySelector(".btnDropdown");
dropdownBtn?.addEventListener("click", topDropdownFavo);
let splittedCity = "";
if (splittedCity == "" || "hiroshima") {
    const citySearchElement = document.querySelector("#citySearch");
    if (citySearchElement) {
        const cityArr = citySearchElement.value.split(",");
        splittedCity = cityArr[0];
        console.log("splittedCity", splittedCity);
    }
    else {
        console.error("Please enter a city name");
    }
}
//# sourceMappingURL=index.js.map