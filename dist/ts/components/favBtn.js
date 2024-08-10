// START section top dropdown btn
export function topDropdownFavo() {
    const dropdown = document.querySelector("#topDropdown");
    if (dropdown !== null) {
        dropdown.classList.toggle("show");
    }
}
// function (event) {
//   const target = event.target as Element | null;
//   if (target && !target.matches(".btnDropdown")) {
//     const dropdowns = document.querySelector(".dropdownContent");
//     if (dropdowns !== null) {
//       for (let i = 0; i < dropdowns.length; i++) {
//         let openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains("show")) {
//           openDropdown.classList.remove("show");
//         }
//       }
//     }
//   }
// };
// // END section top dropdown btn
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
//# sourceMappingURL=favBtn.js.map