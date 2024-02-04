import '../modules/formGet';
import {getResource} from './formGet';

const renderElementOne = document.querySelectorAll(".face"),
      homeBtnReset = document.querySelectorAll('.homes');

class ObjectInformation {
  constructor(city, street, number,  description, rooms, parentSelector) {
    this.city = city;
    this.street = street;
    this.number = number;
    this.description = description;
    this.rooms = rooms;
    this.parent = document.querySelector(parentSelector);
  }
  render() {
    renderElementOne.forEach(page => {
      page.innerHTML = `
        <li class="home"><a href="./index.html">Home</a></li>
        <li data-popupObject>City: ${this.city}</li>
        <li data-popupForm>Street: ${this.street}</li>
        <li data-popupContacts>Home: ${this.number}</li>    
    `; 
    })
  }
}

function infoObject (index) {
  getResource('http://localhost:3000/MyObject')
    .then(data => {
      data.forEach(({city, street, houseNumber, typesOfWork, rooms, parent}, i) => {
          if ((i + 1) === index) {
              new ObjectInformation(city, street, houseNumber, typesOfWork, rooms, parent).render();              
          }            
      });
    });
}

function sessionStorageResetting(selector) {
    selector.forEach(btn => {
        btn.addEventListener('click', () => {
            sessionStorage.setItem('numberOfPage', 1);            
        });
    });
}

infoObject (+sessionStorage.getItem('numberOfPage'));
sessionStorageResetting(homeBtnReset);
