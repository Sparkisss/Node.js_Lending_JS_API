import {getResource} from './formGet';
import {sessionStorageResetting} from './renderPageOfObject';

const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      homeBtn = document.querySelectorAll('.home'),
      renderElementOne = document.querySelector(".main__title"),
      renderElementTwo = document.querySelector(".main__text"),    
      slidesWrapper = document.querySelector('.main__wrapper');

let slideIndex = 1;

export class ObjectInformation {
    constructor(city, street, number,  description, parentSelector) {
        this.city = city;
        this.street = street;
        this.number = number;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        renderElementOne.innerHTML = `City: ${this.city}. Street: ${this.street}-${this.number}.`;
        renderElementTwo.innerHTML = `${this.description}`       
    }
    getCityName (cityRegex, searchSelector) {
        const cityMatch = searchSelector.textContent.match(cityRegex);
        sessionStorage.setItem('city', cityMatch[1]);
    }
}

init (1);
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

function init (index) {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        data.forEach(({city, street, house, descr, parent}, i) => {
            if ((i + 1) === index) {
                new ObjectInformation(city, street, house, descr, parent).render();
                new ObjectInformation(city, street, house, descr, parent).getCityName(/City: (\w+)\./, renderElementOne);
            }            
        });
    });
}

export function infoOfObject (index) {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        data.forEach(({city, street, house, descr, parent}, i) => {
            if ((i + 1) === index) {
                new ObjectInformation(city, street, house, descr, parent).render();
                new ObjectInformation(city, street, house, descr, parent).getCityName(/City: (\w+)\./, renderElementOne);
                slidesWrapper.style.backgroundImage = `url('http://localhost:8080/assets/part_${index}.png')`;
            }            
        });
    });
}



