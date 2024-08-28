import { WeatherData } from "../type/WeatherData.js";

export function displayHourlyData(_hourlyData: WeatherData) {
  const hourlyDataSubset = _hourlyData.list.slice(0, 3);
  const popInfo: HTMLUListElement | null = document.querySelector(".popInfo");

  if (popInfo) popInfo.innerHTML = "";

  hourlyDataSubset.forEach((hourData) => {
    const li = document.createElement("li");
    li.classList.add("hourlyPopContents");

    const pHour = document.createElement("p");
    pHour.classList.add("hourlyPopHour");
    const dateTime = new Date(hourData.dt * 1000); // Pacific Daylight Time

    let hour = Math.ceil(
      dateTime.getUTCHours() + _hourlyData.city.timezone / 3600
    );

    console.log("timedifference:", _hourlyData.city.timezone / 3600);

    console.log("hour:", hour);
    console.log("UTCHours:", dateTime.getUTCHours());

    if (hour >= 24) {
      hour = hour - 24;
      pHour.textContent = `${hour.toString()}:00`;
    } else {
      pHour.textContent = `${hour.toString()}:00`;
    }

    const img = document.createElement("img");
    img.classList.add("dailyDetailDayImg");

    const imgCode = hourData.weather[0].icon;
    img.src = `https://openweathermap.org/img/wn/${imgCode}@4x.png`;
    img.alt = hourData.weather[0].description;
    img.width = 80;
    img.height = 80;

    li.appendChild(pHour);
    li.appendChild(img);
    popInfo?.appendChild(li);
  });
}
