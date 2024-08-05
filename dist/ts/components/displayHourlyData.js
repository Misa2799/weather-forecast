export function displayHourlyData(_hourlyData) {
    const hourlyDataSubset = _hourlyData.list.slice(0, 3);
    const popInfo = document.querySelector(".popInfo");
    if (popInfo)
        popInfo.innerHTML = "";
    hourlyDataSubset.forEach((hourData) => {
        const li = document.createElement("li");
        li.classList.add("hourlyPopContents");
        const pHour = document.createElement("p");
        pHour.classList.add("hourlyPopHour");
        const dateTime = new Date(hourData.dt * 1000);
        const hour = dateTime.getHours();
        pHour.textContent = `${hour.toString()}:00`;
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
//# sourceMappingURL=displayHourlyData.js.map