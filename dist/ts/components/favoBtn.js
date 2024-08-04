"use strict";
// START section top dropdown btn
function topDropdownFavo() {
    const dropdown = document.getElementById("topDropdown");
    if (dropdown !== null) {
        dropdown.classList.toggle("show");
    }
}
function showContents(event) {
    const target = event.target;
    if (target && !target.matches(".btnDropdown")) {
        const dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}
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
//# sourceMappingURL=favoBtn.js.map