const chooseJob = document.querySelectorAll('.slideOfObject div');

chooseJob.forEach((elem) => {
    elem.addEventListener('click', () => {
        console.log(elem);
    })
})


