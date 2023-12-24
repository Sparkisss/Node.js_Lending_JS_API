import {getResource} from './formGet';

const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      renderElementOne = document.querySelector(".main__title"),
      renderElementTwo = document.querySelector(".main__text"),      
      slidesWrapper = document.querySelector('.main__wrapper');
let slideIndex = 1;

class ObjectInormation {
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
}

init (1);

prev.addEventListener('click', (e) => {
    slideIndex--;
    if (slideIndex <= 0) slideIndex = 5;
    infoOfObject (slideIndex); 
});

next.addEventListener('click', (e) => {
    slideIndex++;
    if (slideIndex > 5) slideIndex = 1;
    infoOfObject (slideIndex);     
});

function init (index) {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        data.forEach(({city, street, house, descr, parent}, i) => {
            if ((i + 1) === index) {
                new ObjectInormation(city, street, house, descr, parent).render();
            }            
        });
    });
}

export function infoOfObject (index) {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        data.forEach(({city, street, house, descr, parent}, i) => {
            if ((i + 1) === index) {
                new ObjectInormation(city, street, house, descr, parent).render();
                slidesWrapper.style.backgroundImage = `url('http://localhost:8080/assets/part_${index}.png')`;
            }            
        });
    });
}

