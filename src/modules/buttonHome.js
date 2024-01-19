const btnHome = document.querySelectorAll('.home');

btnHome.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});