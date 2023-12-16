 const apiKey = "c3ce5c27c2eab8287f2be14870b310cb",
       city = document.querySelector('.main__title span').textContent;
       apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

async function checkWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data, "data");

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.outsideTemperature').innerHTML =
        Math.round(data.main.temp) + '&#8451';
    document.querySelector('.outsideHumidity').innerHTML =
        Math.round(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML =
        Math.round(data.wind.speed) + 'km/h';
}

checkWeather();

 