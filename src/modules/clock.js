// clock
const timePanel = document.querySelector('.timePanel'),
      myTime = new Date();

function getTime(time) {
    const t = Date.parse(time),
          days = time.getDate(),
          hours = time.getHours(),
          minutes = time.getMinutes(),
          years = time.getFullYear(),
          month = time.getMonth() + 1;

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'years': years,
        'month': month,
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else return num;
}

function setClock(selector) {
    const timer = document.querySelector(selector),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          days = timer.querySelector('#days'),
          month = timer.querySelector('#month'),
          years = timer.querySelector('#years'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTime(new Date());

        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes); 
        days.innerHTML = getZero(t.days); 
        month.innerHTML = getZero(t.month); 
        years.innerHTML = t.years;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timePanel');