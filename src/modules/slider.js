import {getResource} from './formGet';
import {checkWeather} from './API';

const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      homeBtn = document.querySelectorAll('.home'),
      renderCity = document.querySelector(".main__city"),
      renderLocation = document.querySelector(".main__location"),
      renderTypesOfWork = document.querySelector(".main__typesOfWork"),
      renderNotation = document.querySelector(".main__notation");

const weatherCity = document.querySelector('.city'),
      weatherOutsideTemperature = document.querySelector('.outsideTemperature'),
      weatherOutsideHumidity = document.querySelector('.outsideHumidity'),
      weatherWind = document.querySelector('.wind'),
      weatherIcon = document.getElementById('status');
      
const apiKey = "c3ce5c27c2eab8287f2be14870b310cb";

let city = sessionStorage.getItem('city'),
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`,
    slideIndex = 1;    
      
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
        renderCity.innerHTML = `<p>City: ${this.city}.</p>`;
        renderLocation.innerHTML = `<p>Street: ${this.street} - ${this.houseNumber}.</p>`;
        renderTypesOfWork.innerHTML = `<p>Types of work: ${this.typesOfWork}</p>`;
        renderNotation.innerHTML = `<p>Project designation: ${this.notation}</p>`; 
    }
    getCityName (cityRegex, searchSelector) {
        const cityMatch = searchSelector.textContent.match(cityRegex);
        sessionStorage.setItem('city', cityMatch[1]);
        city = cityMatch[1];
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    }
}

infoOfObject (1);

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
                new ObjectInformation(city, street, houseNumber, typesOfWork, notation, parent).render();
                new ObjectInformation(city, street, houseNumber, typesOfWork, notation, parent).getCityName(/City: (\w+)\./, renderCity);
                checkWeather(weatherCity, weatherOutsideTemperature, weatherOutsideHumidity, weatherWind, weatherIcon, apiUrl);
                renderLocation.style.background = `url('/assets/part_${index}.jpg') no-repeat`;
                console.log(data[0].typesOfWork[2]);                                
            }            
        });
    });
}

// Update numberOfPage
sessionStorage.setItem("is_reloaded", true);
if (sessionStorage.getItem("is_reloaded")) {
	sessionStorage.setItem('numberOfPage', 1);    
}
//go to the next page
let transitionToNextPage = document.querySelector('.main__location');

transitionToNextPage.addEventListener('click', () => {
    window.location.href = 'page1.html';
})