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

init ();

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

function init () {
    new ObjectInormation(
        'Brest',
        'Kirova',
        122,
        "If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
        ".main__slide"
        ).render();
}

export function infoOfObject (index) {
    switch(index) {        
        case 1: 
            new ObjectInormation(
                'Brest',
                'Kirova',
                122,
                "If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
                ".main__slide"
                ).render();
                slidesWrapper.style.backgroundImage = "url('http://localhost/USB_UART/dist/assets/part_1.png')";
                slidesWrapper.style.backgroundImage = "url('http://localhost:3000/assets/part_1.png')"; 
            break;
        case 2: 
            new ObjectInormation(
                'Kobrin',
                'Druschba',
                54, 
                "Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.",
                ".main__slide"
                ).render();
                slidesWrapper.style.backgroundImage = "url('http://localhost/USB_UART/dist/assets/part_2.png')";
                slidesWrapper.style.backgroundImage = "url('http://localhost:3000/assets/part_2.png')"; 
            break;
        case 3: 
            new ObjectInormation(
                'Minsk',
                'Pritickogo',
                91, 
                "It is text for test my try", 
                ".main__slide"
                ).render();
                slidesWrapper.style.backgroundImage = "url('http://localhost/USB_UART/dist/assets/part_3.png')";
                slidesWrapper.style.backgroundImage = "url('http://localhost:3000/assets/part_3.png')"; 
            break;
        case 4: 
            new ObjectInormation(
                'Baranovichi',
                'Kolosa',
                6,
                "I hope I can make it's right",
                ".main__slide"
                ).render();
                slidesWrapper.style.backgroundImage = "url('http://localhost/USB_UART/dist/assets/part_4.png')";
                slidesWrapper.style.backgroundImage = "url('http://localhost:3000/assets/part_4.png')"; 
            break;
        case 5: 
            new ObjectInormation(
                'Brest',
                'Sikorskogo',
                1,
                "It is very important for me and my future",
                ".main__slide"
                ).render();
                slidesWrapper.style.backgroundImage = "url('http://localhost/USB_UART/dist/assets/part_5.png')";
                slidesWrapper.style.backgroundImage = "url('http://localhost:3000/assets/part_5.png')";         
            break;
    }
}

