export function displayCurrentData(_currentData) {
    // DOM
    const currentTempNum = document.querySelector(".currentTempNum");
    const titleCityName = document.querySelector(".titleCityName");
    const weatherImage = document.querySelector(".weatherImg");
    const currentTime = document.querySelector(".weatherTime");
    // clear all primary data
    if (currentTempNum)
        currentTempNum.textContent = "";
    if (titleCityName)
        titleCityName.textContent = "";
    if (weatherImage)
        weatherImage.textContent = "";
    if (currentTime)
        currentTime.textContent = "";
    // replace data
    if (titleCityName)
        titleCityName.textContent = _currentData.name.toLocaleUpperCase();
    const currentTemp = Math.round(_currentData.main.temp - 273.15);
    if (currentTempNum)
        currentTempNum.textContent = currentTemp.toString();
    const hTime = (_currentData.dt + _currentData.timezone) * 1000;
    const setDateTime = new Date(hTime);
    if (currentTime)
        currentTime.textContent = setDateTime.toString();
    const iconCode = _currentData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    if (weatherImage)
        weatherImage.src = iconUrl;
    const dogs = document.querySelector(".dogs");
    const walkingCardsStay = document.querySelector(".walkingCardsStay");
    const walkingCardsGo = document.querySelector(".walkingCardsGo");
    const selected = document.querySelector("#lang");
    if (currentTemp <= 26) {
        const dogsSrc = `images/go.png`;
        if (dogs)
            dogs.src = dogsSrc;
        walkingCardsGo?.classList.remove("hidden");
        walkingCardsStay?.classList.add("hidden");
    }
    else {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        const dogsSrc = `images/stay-${rndInt}.png`;
        if (dogs)
            dogs.src = dogsSrc;
        walkingCardsGo?.classList.add("hidden");
        walkingCardsStay?.classList.remove("hidden");
    }
    const translateToEn = () => {
        const currentTempTitle = document.querySelector(".currentTempTitle");
        const stay = document.querySelector(".stay");
        const go = document.querySelector(".go");
        if (currentTempTitle)
            currentTempTitle.textContent = "Temperature";
        if (stay)
            stay.textContent = "Maybe later...";
        if (go)
            go.textContent = "Let's go!";
    };
    const translateToJa = () => {
        const currentTempTitle = document.querySelector(".currentTempTitle");
        const stay = document.querySelector(".stay");
        const go = document.querySelector(".go");
        if (currentTempTitle)
            currentTempTitle.textContent = "今日の気温";
        if (stay)
            stay.textContent = "行かん...";
        if (go)
            go.innerHTML = "ばあちゃん！<br />散歩行こ！";
    };
    selected?.addEventListener("change", () => {
        if (selected.value === "en") {
            translateToEn();
        }
        else {
            translateToJa();
        }
    });
}
//# sourceMappingURL=displayCurrentData.js.map