import { topDropdownFavo } from "./components/favBtn.js";
import { fetchWeatherOnload } from "./components/fetchWeatherOnload.js";

window.addEventListener("load", fetchWeatherOnload);

const dropdownBtn = document.querySelector(".btnDropdown");
dropdownBtn?.addEventListener("click", topDropdownFavo);

let splittedCity: string = "";

if (splittedCity == "" || "hiroshima") {
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
