window.addEventListener('DOMContentLoaded', () => { 
    const formMessage = document.querySelectorAll('form');
    const statusMessage = document.querySelector('.userMessage');
    const message = {
        regular: "Send",
        loading: "Load",
        success: "OK",
        failure: "Err..."
    };

    function requestMessage(message, styles, time) {
        setTimeout(() => {
            statusMessage.textContent = message;
            statusMessage.style.border = styles;
        }, time);
    }

    formMessage.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            requestMessage(message.loading, '3px solid black', 0);
 
            const formData = new FormData(form);  

            const json = JSON.stringify(Object.fromEntries(formData.entries()));         

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                requestMessage(message.success, '3px solid green', 0);
            }).catch(() => {
                requestMessage(message.failure, '3px solid red', 0);              
            }).finally(() => {
                form.reset();
                requestMessage(message.regular, '', 2000);
            });   
        });
    }  
});





