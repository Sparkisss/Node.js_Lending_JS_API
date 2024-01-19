const popupTriger = document.querySelectorAll('[data-popupObject]'),
      popupTrigerContacts = document.querySelectorAll('[data-popupContacts]'),
      popupTrigerForm = document.querySelectorAll('[data-popupForm]'),
      contactsContent = document.querySelector('.list'),
      popupBodyForClose = document.querySelector('.popupObject__body'),
      popupContent = document.querySelector('.logIn'),
      popupCloseBtn = document.querySelector('[data-close]'),
      body = document.querySelector('body');

// popupTriger.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         popupContent.classList.toggle('open');
//         body.classList.add('scroll');
//         contactsContent.innerHTML = `
//             <div class="popupObject__title">List of object:</div>
//             <li><a href="page1.html">City: Brest. Street: Kirova-122.</a></li>
//             <li>City: Kobrin. Street: Druschba-54.</li>
//             <li>City: Minsk. Street: Pritickogo-91.</li>
//             <li>City: Baranovichi. Street: Kolosa-6.</li>
//             <li>City: Brest. Street: Sikorskogo-1.</li>
//     `
//     })
// });

// popupTrigerContacts.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         popupContent.classList.toggle('open');
//         body.classList.add('scroll');
//         contactsContent.innerHTML = `
//             <div class="popupObject__title">Contacts:</div>
//             <li>Phone: +375444044444</li>
//             <li>Email: firma@gmail.com</li>
//             <li>Faks: +801623399243</li>
//         `
//     })
// });

popupTrigerForm.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popupContent.classList.add('open');
        body.classList.add('scroll');
    //     popupContent.innerHTML = `
    //     <section class="logIn">                
    //     <div class="form-box">                    
    //         <form action="">
    //             <a href="" data-close class="section__clouse">&#10006</a>
    //             <h2>Login</h2>
    //             <div class="inputbox">                            
    //                 <img src="/src/img/icon/envelope.svg" alt="">
    //                 <input type="email" required>
    //                 <label for="">Email</label>
    //             </div>
    //             <div class="inputbox">
    //                 <img src="/src/img/icon/lock.svg" alt="">
    //                 <input type="password" required>
    //                 <label id="one" for="">Password</label>
    //             </div>
    //             <div class="forget">
    //                 <label for=""><input type="checkbox">Remember Me <a href="#">Forgot Password</a></label>
                    
    //             </div>
    //             <button>Log in</button>
    //             <div class="register">
    //                 <p>Don't have a account <a href="#">Register</a></p>
    //             </div>
    //         </form>
    //     </div>
    // </section>
        // `
    })
});

// popupCloseBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // if (e.code === 'Click' && popupContent.classList.contains('open')) {
//     //     popupContent.classList.remove('open');
//     //     body.classList.remove('scroll');
//     // }
//     // popupContent.classList.toggle('open');
//     // body.classList.remove('scroll');
// });

// popupContent.addEventListener('click', (e) => {
//     if (e.target === popupBodyForClose) {
//         popupContent.classList.toggle('open');
//         body.classList.remove('scroll');
//     }    
// });

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popupContent.classList.contains('open')) {
        popupContent.classList.remove('open');
        body.classList.remove('scroll');
    }
});