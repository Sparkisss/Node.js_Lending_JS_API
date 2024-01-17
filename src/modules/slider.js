import {getResource} from './formGet';
import {sessionStorageResetting} from './renderPageOfObject';
import {checkWeather} from './API';

const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      homeBtn = document.querySelectorAll('.home'),
      renderCity = document.querySelector(".main__city"),
      renderLocation = document.querySelector(".main__location"),
      renderTypesOfWork = document.querySelector(".main__typesOfWork"),
      renderWeatner = document.querySelector(".main__weather"),
      renderNotation = document.querySelector(".main__notation");

const weatherCity = document.querySelector('.city'),
      weatherOutsideTemperature = document.querySelector('.outsideTemperature'),
      weatherOutsideHumidity = document.querySelector('.outsideHumidity'),
      weatherWind = document.querySelector('.wind');

const apiKey = "c3ce5c27c2eab8287f2be14870b310cb",
      city = sessionStorage.getItem('city'),
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let slideIndex = 1;

class ObjectInformation {
    constructor(city, street, houseNumber,  typesOfWork, notation, parentSelector) {
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.typesOfWork = typesOfWork;
        this.notation = notation;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        renderCity.innerHTML = `City: ${this.city}.`;
        renderLocation.innerHTML = `Street: ${this.street} - ${this.houseNumber}.`;
        renderTypesOfWork.innerHTML = `Types of work: ${this.typesOfWork}`;
        renderNotation.innerHTML = `Project designation: ${this.notation}`;       
    }
    getCityName (cityRegex, searchSelector) {
        const cityMatch = searchSelector.textContent.match(cityRegex);
        sessionStorage.setItem('city', cityMatch[1]);
    }
}

infoOfObject (1);
sessionStorageResetting(homeBtn);

prev.addEventListener('click', (e) => {
    slideIndex--;    
    if (slideIndex <= 0) slideIndex = 5;
    infoOfObject (slideIndex);
    sessionStorage.setItem('numberOfPage', slideIndex);        
});

next.addEventListener('click', (e) => {
    slideIndex++;
    if (slideIndex > 5) slideIndex = 1;
    infoOfObject (slideIndex);
    sessionStorage.setItem('numberOfPage', slideIndex);  
});

export function infoOfObject (index) {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        data.forEach(({city, street, houseNumber, typesOfWork, notation, parent}, i) => {
            if ((i + 1) === index) {
                checkWeather(weatherCity, weatherOutsideTemperature, weatherOutsideHumidity, weatherWind, apiUrl);
                new ObjectInformation(city, street, houseNumber, typesOfWork, notation, parent).render();
                new ObjectInformation(city, street, houseNumber, typesOfWork, notation, parent).getCityName(/City: (\w+)\./, renderCity);                                
            }            
        });
    });
}
// Update numberOfPage
sessionStorage.setItem("is_reloaded", true);
if (sessionStorage.getItem("is_reloaded")) {
	sessionStorage.setItem('numberOfPage', 1);
}