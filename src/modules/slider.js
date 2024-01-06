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
    getResource('http://localhost:3000/MyObject2023')
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
    getResource('http://localhost:3000/MyObject2023')
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

// new slider

// const btnYearsUp = document.querySelector('.left .arrow__up'),
//       btnYearsDown = document.querySelector('.left .arrow__down'),
//       btnObjectUp = document.querySelector('.right .arrow__up'),
//       btnObjectDown = document.querySelector('.right .arrow__down'),

//       sliders = document.querySelectorAll('.left .slide__elem'),



//       slidWrapper = document.querySelector('.left .slider'),
//       slidesField = document.querySelector('.left .slider__wrapper'),

//       height = window.getComputedStyle(slidWrapper).height;
     
// let slidIndex = 1;
// let offset = 0;

// slidesField.style.height = 100 * sliders.length + '%';
// slidesField.style.transition = '0.5s all';

// slidWrapper.style.overflow = 'hidden';

// btnYearsUp.addEventListener('click', () => {
//     if (offset == +height.slice(0, height.length - 2) * (sliders.length - 1)) {
//         offset = 0;
//     } else {
//         offset += +height.slice(0, height.length - 2);
//     }

//     slidesField.style.transform = `translateY(-${offset / 5}px)`;
// });

// btnYearsDown.addEventListener('click', () => {
//     if (offset == 0) {        
//         offset = +height.slice(0, height.length - 2) * (sliders.length - 1);
//     } else {
//         offset -= +height.slice(0, height.length - 2);
//     }

//     slidesField.style.transform = `translateY(-${offset / 5}px)`;
// });

// console.log(+height.slice(0, height.length - 2));

// infinite slider

const images = [
    '2022.png', '2023.png', '2024.png', '2025.png', '2026.png'
];

let activeImage = 0,
    setBtnFlag = true;
const sliderPlace = document.querySelector('.left .slider__wrapper');
const heightOffset = document.querySelector('.left').clientHeight;
sliderPlace.style.height = heightOffset + 'px';
console.log(heightOffset);

const initSlider = () => {
    const img = document.createElement('img');
    img.alt = '';
    img.src = './assets/' + images[activeImage];
    sliderPlace.append(img);
    nextImageGenerate();
}

const nextImageGenerate = () => {
    let nextImage = activeImage + 1;
    if (nextImage >= images.length) nextImage = 0;
    const img = document.createElement('img');
    img.alt = '';
    img.src = './assets/' + images[nextImage];
    sliderPlace.append(img);
}

initSlider();
initSlider();







