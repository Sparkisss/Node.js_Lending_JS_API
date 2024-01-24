import '../modules/formGet';
import {getResource} from './formGet';

const renderElementOne = document.querySelector(".main__title"),
      renderElementTwo = document.querySelector(".main__text"),
      homeBtnReset = document.querySelectorAll('.homes');

class ObjectInformation {
  constructor(city, street, number,  description, parentSelector) {
    this.city = city;
    this.street = street;
    this.number = number;
    this.description = description;
    this.parent = document.querySelector(parentSelector);
  }
  render() {
    renderElementOne.innerHTML = `City: <span>${this.city}</span>. Street: ${this.street}-${this.number}.`;
    renderElementTwo.innerHTML = `${this.description}`;      
  }
}

function infoObject (index) {
  getResource('http://localhost:3000/MyObject')
    .then(data => {
      data.forEach(({city, street, houseNumber, typesOfWork, parent}, i) => {
          if ((i + 1) === index) {
              new ObjectInformation(city, street, houseNumber, typesOfWork, parent).render();                    
          }            
      });
    });
}

infoObject (+sessionStorage.getItem('numberOfPage'));

function sessionStorageResetting(selector) {
    selector.forEach(btn => {
        btn.addEventListener('click', () => {
            sessionStorage.setItem('numberOfPage', 1);            
        });

    });
}
sessionStorageResetting(homeBtnReset);
