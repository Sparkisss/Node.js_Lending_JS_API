const apiKey = "c3ce5c27c2eab8287f2be14870b310cb",
city = sessionStorage.getItem('city'),
apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

const weatherCity = document.querySelector('.city'),
      weatherOutsideTemperature = document.querySelector('.outsideTemperature'),
      weatherOutsideHumidity = document.querySelector('.outsideHumidity'),
      weatherWind = document.querySelector('.wind');

async function checkWeather(city, temp, hum, wind, api) {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data, "data");
    city.innerHTML = data.name;
    temp.innerHTML = (data.main.temp).toFixed(1) + '&#8451';
    hum.innerHTML = (data.main.humidity) + '%';
    wind.innerHTML = (data.wind.speed).toFixed(1) + 'km/h';
}
checkWeather(weatherCity, weatherOutsideTemperature, weatherOutsideHumidity, weatherWind, apiUrl);

export {checkWeather, apiUrl, city};