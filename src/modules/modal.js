import {getResource} from './formGet';

const popupTriger = document.querySelectorAll('[data-popupObject]'),
      popupTrigerContacts = document.querySelectorAll('[data-popupContacts]'),
      popupTrigerForm = document.querySelectorAll('[data-popupForm]'),
      inContent = document.querySelector('.form__content'),
      popupContent = document.querySelector('.logIn'),
      popupCloseBtn = document.querySelector('[data-close]'),
      body = document.querySelector('body');


popupTriger.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.toggle('open');
        body.classList.add('scroll');
        modalObjectRender ();
    })
});
//render modal -- Object
function modalObjectRender () {
    getResource('http://localhost:3000/MyObject')
    .then(data => {
        inContent.innerHTML = `
        <h2>List of object:</h2>
        <div class="inputbox"></div>
        `
        data.forEach(({city, street, houseNumber}, i) => { 
            const newObjectCity = document.createElement('a');
            newObjectCity.setAttribute('href', 'page1.html');
            newObjectCity.textContent = `${i+1}. ${city} - ${street} ${houseNumber} `;
            inContent.appendChild(newObjectCity);
        });
    });
}

popupTrigerContacts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.toggle('open');
        body.classList.add('scroll');
        inContent.innerHTML = `                 
            <h2>Contacts</h2>
            <div class="inputbox-contacts">                            
                <ul>Tel:
                    <li>+375(33) 679 18 12</li>
                    <li>+375(29) 679 18 12</li>
                </ul>
            </div>
            <div class="inputbox-contacts">
                <ul>Fax:
                    <li>80162 67 12 21</li>
                </ul>
            </div>
            <div class="inputbox-contacts">
                <ul>Email:
                    <li>PTS@gmail.com</li>
                </ul>
            </div>
            <div class="inputbox-contacts">
                <ul>Social media:
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://web.telegram.org">Telegram</a></li>
                </ul>
            </div>
            <div class="inputbox-contacts">
                <ul>Our Website:
                    <li><a href="https://www.google.com">PTS.com</a></li>
                </ul>
            </div>
        `
    })
});

popupTrigerForm.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.add('open');
        body.classList.add('scroll');
        inContent.innerHTML = `
            <h2>Log In</h2>
            <div class="inputbox">                            
            <img src="assets/envelope.svg" alt="">
                <input type="email" required>
                <label for="">Email</label>
            </div>
            <div class="inputbox">
                <img src="assets/lock.svg" alt="">
                <input type="password" required>
                <label id="one" for="">Password</label>
            </div>
            <div class="forget">
                <label for=""><input type="checkbox">Remember Me <a href="#">Forgot Password</a></label>
            </div>
            <button>Log in</button>
            <div class="register">
                <p>Don't have a account <a href="#">Register</a></p>
            </div>
        `
    })
});

popupCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupContent.classList.toggle('open');
    body.classList.remove('scroll');
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popupContent.classList.contains('open')) {
        popupContent.classList.remove('open');
        body.classList.remove('scroll');
    }
});

