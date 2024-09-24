import { searchCityWeather } from "./components/searchCityWeather.js";
window.addEventListener("load", fetchWeather);
function fetchWeather() {
    const citySearchElement = document.querySelector("#searchCities");
    let city = "hiroshima";
    searchCityWeather(city);
    citySearchElement?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const inputCity = citySearchElement?.value.trim();
            e.preventDefault();
            searchCityWeather(inputCity);
            citySearchElement.value = "";
        }
    });
}
//# sourceMappingURL=index.js.map