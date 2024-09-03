import { searchCityWeather } from "./components/searchCityWeather.js";

window.addEventListener("load", fetchWeather);

function fetchWeather() {
  const citySearchElement: HTMLInputElement | null =
    document.querySelector("#searchCities");

  let city: string = "hiroshima";
  searchCityWeather(city);

  citySearchElement?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputCity = citySearchElement?.value.trim();
      console.log("inputCity:", inputCity);
      e.preventDefault();
      searchCityWeather(inputCity);
      citySearchElement.value = "";
    }
  });
}
