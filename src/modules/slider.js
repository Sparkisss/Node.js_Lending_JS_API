const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      renderElementOne = document.querySelector(".main__title"),
      renderElementTwo = document.querySelector(".main__text"),      
      slidesWrapper = document.querySelector('.main__wrapper'),
      adressOfPage = document.querySelector('.main__button a');
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

init ();

prev.addEventListener('click', (e) => {
    slideIndex--;
    if (slideIndex <= 0) slideIndex = 5;
    infoOfObject (slideIndex);
    slider();  
});

next.addEventListener('click', (e) => {
    slideIndex++;
    if (slideIndex > 5) slideIndex = 1;
    infoOfObject (slideIndex);
    slider();       
});

function init () {
    new ObjectInormation(
        'Brest',
        'Kirova',
        122,
        "If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
        ".main__slide"
        ).render();
}

function slider () {         
        if (slideIndex === 1) {            
            slidesWrapper.classList.add('one');
            slidesWrapper.classList.remove('two');
            slidesWrapper.classList.remove('three');
            slidesWrapper.classList.remove('four');
            slidesWrapper.classList.remove('five');
        }
        else if (slideIndex === 2) {            
            slidesWrapper.classList.remove('one');
            slidesWrapper.classList.add('two');
            slidesWrapper.classList.remove('three');
            slidesWrapper.classList.remove('four');
            slidesWrapper.classList.remove('five');
        }   
        else if (slideIndex === 3) {            
            slidesWrapper.classList.remove('one');
            slidesWrapper.classList.remove('two');
            slidesWrapper.classList.add('three');
            slidesWrapper.classList.remove('four');
            slidesWrapper.classList.remove('five');
        }      
        else if (slideIndex === 4) {            
            slidesWrapper.classList.remove('one');
            slidesWrapper.classList.remove('two');
            slidesWrapper.classList.remove('three');
            slidesWrapper.classList.add('four');
            slidesWrapper.classList.remove('five');
        }  
        else if (slideIndex === 5) {            
            slidesWrapper.classList.remove('one');
            slidesWrapper.classList.remove('two');
            slidesWrapper.classList.remove('three');
            slidesWrapper.classList.remove('four');
            slidesWrapper.classList.add('five');
        }             
    return slideIndex;
}


function infoOfObject (index) {
    switch(index) {        
        case 1: 
            new ObjectInormation(
                'Brest',
                'Kirova',
                122,
                "If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
                ".main__slide"
                ).render();
                adressOfPage.setAttribute('href', './page1.html');
            break;
        case 2: 
            new ObjectInormation(
                'Kobrin',
                'Druschba',
                54, 
                "Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
                ".main__slide"
                ).render();
                adressOfPage.setAttribute('href', './page2.html');
            break;
        case 3: 
            new ObjectInormation(
                'Minsk',
                'Pritickogo',
                91, 
                "It is text for test my try", 
                ".main__slide"
                ).render();
                adressOfPage.setAttribute('href', './page3.html');
            break;
        case 4: 
            new ObjectInormation(
                'Baranovichi',
                'Kolosa',
                6,
                "I hope I can make it's right",
                ".main__slide"
                ).render();
                adressOfPage.setAttribute('href', './page4.html');
            break;
        case 5: 
            new ObjectInormation(
                'Brest',
                'Sikorskogo',
                1,
                "It is very important for me and my future",
                ".main__slide"
                ).render();
                adressOfPage.setAttribute('href', './page5.html');            
            break;
    }
}

