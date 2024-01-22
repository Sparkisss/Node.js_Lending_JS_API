const toggleBtn = document.querySelector('.toggleBtn');

document.documentElement.classList.remove('dark', 'light');
document.documentElement.classList.add(localStorage.theme);

toggleBtn.addEventListener('click', (e) => {
    if (e.target.nodeName === "INPUT" && e.target.checked === true) {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }else if (e.target.nodeName === "INPUT" && e.target.checked === false) {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
});