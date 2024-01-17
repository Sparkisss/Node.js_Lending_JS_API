import '../modules/formGet';
import {getResource} from './formGet';

// const renderElementOne = document.querySelector(".main__title"),
//       renderElementTwo = document.querySelector(".main__text");

// class ObjectInformation {
//   constructor(city, street, number,  description, parentSelector) {
//     this.city = city;
//     this.street = street;
//     this.number = number;
//     this.description = description;
//     this.parent = document.querySelector(parentSelector);
//   }
//   render() {
//     renderElementOne.innerHTML = `City: <span>${this.city}</span>. Street: ${this.street}-${this.number}.`;
//     renderElementTwo.innerHTML = `${this.description}`;      
//   }
// }

// function infoObject (index) {
//   getResource('http://localhost:3000/MyObject')
//     .then(data => {
//       data.forEach(({city, street, house, descr, parent}, i) => {
//           if ((i + 1) === index) {
//               new ObjectInformation(city, street, house, descr, parent).render();                    
//           }            
//       });
//     });
// }

// infoObject (+sessionStorage.getItem('numberOfPage'));

const homeButton = document.querySelectorAll('.home');

export function sessionStorageResetting(selector) {
    selector.forEach(btn => {
        btn.addEventListener('click', () => {
            sessionStorage.setItem('numberOfPage', 1);            
        });

    });
}
sessionStorageResetting(homeButton);