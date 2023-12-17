import { infoOfObject } from './slider';

const inputArea = document.querySelector('.search'),
      searchInput = document.querySelector('#object');

    inputArea.addEventListener('click', (e) => {
        e.preventDefault();

        Object.entries(listOfObject).forEach(([key, value]) => {
            if (value === searchInput.value) {
            infoOfObject (+key);
            }
        })
        searchInput.value = "";
    })

    const listOfObject = {
        1: 'City: Brest. Street: Kirova-122.',
        2: 'City: Kobrin. Street: Druschba-54.',
        3: 'City: Minsk. Street: Pritickogo-91.',
        4: 'City: Baranovichi. Street: Kolosa-6.',
        5: 'City: Brest. Street: Sikorskogo-1.',
    }
