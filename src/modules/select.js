const chooseJob = document.querySelectorAll('.slideOfObject div'),
      chooseSubJob = document.querySelectorAll('.typePanel div'),
      chooseFlat = document.querySelectorAll('.slideOfFlat li'),
      btnUp = document.querySelector('.slideOfFlat-up'),
      btnDown = document.querySelector('.slideOfFlat-down');

chooseJob.forEach((elems) => {
    elems.addEventListener('click', () => {
        chooseJob.forEach((elems) => {
            elems.classList.remove('pick');
        });
        elems.classList.add('pick');
        
    })
})

chooseSubJob.forEach((elems) => {
    elems.addEventListener('click', () => {
        chooseSubJob.forEach((elems) => {
            elems.classList.remove('pick');
        });
        elems.classList.add('pick');
    })
})

chooseFlat.forEach((elems) => {
    elems.addEventListener('click', () => {
        chooseFlat.forEach((elems) => {
            elems.classList.remove('pick');
        });
        elems.classList.add('pick');
    })
})

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
//Render elements

function renderTypePanel() {
    chooseSubJob[0].style.background = `url('http://localhost:8080/assets/heating.svg') no-repeat`;
    chooseSubJob[1].style.background = `url('http://localhost:8080/assets/gvs.svg') no-repeat`;
    chooseSubJob[2].style.background = `url('http://localhost:8080/assets/addWater.svg') no-repeat`;
}

// renderTypePanel();