const chooseJob = document.querySelectorAll('.slideOfObject div'),
      chooseSubJob = document.querySelectorAll('.typePanel div'),
      chooseFlat = document.querySelectorAll('.slideOfFlat li'),
      btnUp = document.querySelector('.slideOfFlat-up'),
      btnDown = document.querySelector('.slideOfFlat-down'),
      selectOptions = document.querySelector('.selectOptions');

function override (selector) {
    selector.forEach((elems) => {
        elems.addEventListener('click', () => {
            selector.forEach((elems) => {
                elems.classList.remove('pick');
            });
            elems.classList.add('pick');
            if (elems.className === 'one pick') {
                renderSelectPanel(1);
                renderTypePanel
                (`url('http://localhost:8080/assets/lightbulb-setting.svg') no-repeat`, `url('http://localhost:8080/assets/address-card.svg') no-repeat`, `url('http://localhost:8080/assets/apartment.svg') no-repeat`); 
            }else if (elems.className === 'two pick') {
                renderSelectPanel(2);
                renderTypePanel
                (`url('http://localhost:8080/assets/heating.svg') no-repeat`, `url('http://localhost:8080/assets/gvs.svg') no-repeat`, `url('http://localhost:8080/assets/addWater.svg') no-repeat`); 
            }else if (elems.className === 'three pick') {
                renderSelectPanel(3);
                renderTypePanel
                (`url('http://localhost:8080/assets/automatic.svg') no-repeat`, `url('http://localhost:8080/assets/manual.svg') no-repeat`, `url('http://localhost:8080/assets/off.svg') no-repeat`); 
            }
            else if (elems.className === 'four pick') {
                renderSelectPanel(4);
                renderTypePanel
                (`url('http://localhost:8080/assets/heating.png') no-repeat`, `url('http://localhost:8080/assets/hotWater.png') no-repeat`, `url('http://localhost:8080/assets/coldWater.png') no-repeat`); 
            }
        })
    })
}

function renderTypePanel(one, two, three) {
    chooseSubJob[0].style.background = one;
    chooseSubJob[1].style.background = two;
    chooseSubJob[2].style.background = three;
}

function renderSelectPanel(programNumber) {
    console.log(programNumber);
    
    if (programNumber === 2 || programNumber === 3) {
        selectOptions.innerHTML = `
        <li>50</li>
        `
        const selectOptionsLi = document.querySelector('.selectOptions li');
        selectOptionsLi.style.height = '100%';
    } else if (programNumber === 1 ||programNumber === 4) {
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
        // const selectOptions = document.querySelector('.selectOptions li');
        
        
        
    }

}

override (chooseJob);
override (chooseSubJob);
override (chooseFlat);

btnUp.addEventListener('click', () => {
    chooseFlat.forEach((e) => {
        if (+(e.innerText) <= 9){
            e.innerText = e.innerText;
        } else e.innerText = +(e.innerText) - 9;  
    })
})

btnDown.addEventListener('click', () => {
    chooseFlat.forEach((e) => {
        if (+(e.innerText) >= (37-9)) {
            e.innerText = e.innerText;
        } else e.innerText = +(e.innerText) + 9;
        
    })
})
