const popupTriger = document.querySelectorAll('[data-popupObject]'),
      popupTrigerContacts = document.querySelectorAll('[data-popupContacts]'),
      popupTrigerForm = document.querySelectorAll('[data-popupForm]'),
      contactsContent = document.querySelector('.list'),
      popupBodyForClose = document.querySelector('.popupObject__body'),
      popupContent = document.querySelector('.popupObject'),
      popupCloseBtn = document.querySelector('[data-close]'),
      body = document.querySelector('body');

popupTriger.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.toggle('open');
        body.classList.add('scroll');
        contactsContent.innerHTML = `
            <div class="popupObject__title">List of object:</div>
            <li><a href="page1.html">City: Brest. Street: Kirova-122.</a></li>
            <li>City: Kobrin. Street: Druschba-54.</li>
            <li>City: Minsk. Street: Pritickogo-91.</li>
            <li>City: Baranovichi. Street: Kolosa-6.</li>
            <li>City: Brest. Street: Sikorskogo-1.</li>
    `
    })
});

popupTrigerContacts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.toggle('open');
        body.classList.add('scroll');
        contactsContent.innerHTML = `
            <div class="popupObject__title">Contacts:</div>
            <li>Phone: +375444044444</li>
            <li>Email: firma@gmail.com</li>
            <li>Faks: +801623399243</li>
        `
    })
});

popupTrigerForm.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.toggle('open');
        body.classList.add('scroll');
        contactsContent.innerHTML = `
            <div class="popupObject__title">Login:</div>
            <form action="">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
          </form>
        `
    })
});

popupCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupContent.classList.toggle('open');
    body.classList.remove('scroll');
});

popupContent.addEventListener('click', (e) => {
    if (e.target === popupBodyForClose) {
        popupContent.classList.toggle('open');
        body.classList.remove('scroll');
    }    
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popupContent.classList.contains('open')) {
        popupContent.classList.remove('open');
        body.classList.remove('scroll');
    }
});