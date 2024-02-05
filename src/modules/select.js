import {getResource} from './formGet';

const chooseJob = document.querySelectorAll('.slideOfObject div'),
      chooseSubJob = document.querySelectorAll('.typePanel div'),
      chooseFlat = document.querySelectorAll('.slideOfFlat li'),
      btnUp = document.querySelector('.slideOfFlat-up'),
      btnDown = document.querySelector('.slideOfFlat-down'),
      selectOptions = document.querySelector('.selectOptions');
let rooms = sessionStorage.getItem('rooms');

function override (selector) {
    selector.forEach((elems) => {
        elems.addEventListener('click', () => {
            selector.forEach((elems) => {
                elems.classList.remove('pick');
            });
            elems.classList.add('pick');
            if (elems.className === 'one pick') {
                renderSelectPanel(2);                
                renderTypePanel
                (`url('http://localhost:8080/assets/lightbulb-setting.svg') no-repeat`, `url('http://localhost:8080/assets/address-card.svg') no-repeat`, `url('http://localhost:8080/assets/apartment.svg') no-repeat`);
                return jobIndex = 1; 
            }else if (elems.className === 'two pick') {
                renderSelectPanel(1);
                renderTypePanel
                (`url('http://localhost:8080/assets/heating.svg') no-repeat`, `url('http://localhost:8080/assets/gvs.svg') no-repeat`, `url('http://localhost:8080/assets/addWater.svg') no-repeat`);
                return jobIndex = 2;  
            }else if (elems.className === 'three pick') {
                renderSelectPanel(1);
                renderTypePanel
                (`url('http://localhost:8080/assets/automatic.svg') no-repeat`, `url('http://localhost:8080/assets/manual.svg') no-repeat`, `url('http://localhost:8080/assets/off.svg') no-repeat`);
                return jobIndex = 3;  
            }
            else if (elems.className === 'four pick') {
                renderSelectPanel(2);
                renderTypePanel
                (`url('http://localhost:8080/assets/heating.png') no-repeat`, `url('http://localhost:8080/assets/hotWater.png') no-repeat`, `url('http://localhost:8080/assets/coldWater.png') no-repeat`);
                return jobIndex = 4;  
            }
        })
    })
}

function renderTypePanel(one, two, three) {
    chooseSubJob[0].style.background = one;
    chooseSubJob[1].style.background = two;
    chooseSubJob[2].style.background = three;
}

function renderSelectPanel(panelNumber) {
    if (panelNumber === 1) {
        selectOptions.innerHTML = `
        <li>50</li>
        `
        const selectOptionsLi = document.querySelector('.selectOptions li');
        selectOptionsLi.style.height = '100%';

        selectOptionsLi.addEventListener('click', () => {
            console.log('d');
        })

    } else if (panelNumber === 2) {
        selectOptions.innerHTML = `
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>                                    
        `
        const chooseFlat = document.querySelectorAll('.slideOfFlat li');
        override (chooseFlat);
        pickRoom(rooms, 1, Math.floor(rooms/9), rooms % 9, chooseFlat);
    } else if (panelNumber === 3) {
        selectOptions.innerHTML = `
        <li>1</li>
        <li>2</li>                                  
    ` 
    const chooseFlat = document.querySelectorAll('.slideOfFlat li');
    override (chooseFlat);
    }
}

function pickRoom(rooms, myIndex, count, rest, selector) {
    btnUp.addEventListener('click', () => {
        myIndex--;
        if (myIndex > count) myIndex = count;
        if (myIndex <= 0) myIndex = 1;
        if (myIndex === count) {
            selector.forEach((e, i) => {
                if (!e.innerText) {     
                    e.innerText = rooms - rest + i - 8;
                }else e.innerText = +(e.innerText) - 9;
            })
        } else if (myIndex < count) {
            selector.forEach((e) => {
                if (+(e.innerText) <= 9) {
                    e.innerText = e.innerText;
                }else e.innerText = +(e.innerText) - 9;
            })
        }
    })
    
    btnDown.addEventListener('click', () => { 
        if (count > myIndex) {
            myIndex++;
            selector.forEach((e) => {
                e.innerText = +(e.innerText) + 9;
            })
        }else if (myIndex === count) {
            selector.forEach((e, i) => {
                if (i <= (rest - 1)) {
                    e.innerText = +(e.innerText) + 9;
                }else if(i !== (rest - 1))  {
                    e.innerText = '';
                }
            })
            myIndex++;
        }
    })
}

let jobIndex = 1;
let subJobIndex = 1;

chooseSubJob.forEach(item => {
    item.addEventListener('click', () => {
        subJobIndex = item.innerText.slice(0, -1);
        console.log(jobIndex);
        if (jobIndex === 1) {
            switch (subJobIndex) {
                case '1':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(2);
                    break;
                case '2':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(3);
                    break;
                case '3':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(3);
                    break;
                default:
                    createScreen('Error');
            }
        }else if (jobIndex === 2) {
            switch (subJobIndex) {
                case '1':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                case '2':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                case '3':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                default:
                    createScreen('Error');
            }
        }else if (jobIndex === 3) {
            switch (subJobIndex) {
                case '1':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                case '2':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                case '3':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(1);
                    break;
                default:
                    createScreen('Error');
            }
        }else if (jobIndex === 4) {
            switch (subJobIndex) {
                case '1':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(2);
                    break;
                case '2':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(2);
                    break;
                case '3':
                    getRoomInfo(chooseFlat);
                    renderSelectPanel(2);
                    break;
                default:
                    createScreen('Error');
            }
        }
    })
})

function createScreen(supplyMeter, accumulatedExpense, instantaneousRateOfFlow, startDate, endDate) {
    document.querySelector('.informPanel').innerHTML = `
    <ul>
        <li>Тип прибора: ${supplyMeter}</li>
        <li>Накопленный расход: ${accumulatedExpense} kW</li>
        <li>Мнгновенный  расход: ${instantaneousRateOfFlow} kW</li>
        <li>Дата поверки: ${startDate}</li>
        <li>Следующая дата поверки: ${endDate}</li>
    </ul>
    `
}

function getScreenInfo(index, rommsNumber, indexSubJob = 1) {
    getResource('http://localhost:3000/MyObject')
      .then(data => {
        data.forEach(({apartmentReadings, introductoryCounter}, i) => {  
            if ((i + 1) === index && indexSubJob === 1) {
                createScreen
                (apartmentReadings[rommsNumber].supplyMeter, 
                apartmentReadings[rommsNumber].accumulatedExpense, 
                apartmentReadings[rommsNumber].instantaneousRateOfFlow, 
                apartmentReadings[rommsNumber].startDate, 
                apartmentReadings[rommsNumber].endDate)           
            }        
        });
      });
  }

  function getRoomInfo(selector) {
    selector.forEach(item => {
        item.addEventListener('click', () => {
            getScreenInfo (+sessionStorage.getItem('numberOfPage'), +(item.innerText) - 1, indexSubJob = 1)
        })
    })
}





override (chooseJob);
override (chooseSubJob);
override (chooseFlat);
pickRoom(rooms, 1, Math.floor(rooms/9), rooms % 9, chooseFlat);
getRoomInfo(chooseFlat);
