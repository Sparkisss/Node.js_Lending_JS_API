 const apiKey = "c3ce5c27c2eab8287f2be14870b310cb",
       city = document.querySelector('.main__title span').textContent,
       apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

async function checkWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data, "data");

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.outsideTemperature').innerHTML =
        (data.main.temp).toFixed(1) + '&#8451';
    document.querySelector('.outsideHumidity').innerHTML =
        (data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML =
        (data.wind.speed).toFixed(1) + 'km/h';
}

checkWeather();

 