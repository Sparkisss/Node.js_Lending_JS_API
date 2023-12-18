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
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            requestMessage(message.loading, '3px solid black', 0);
    
            const request = new XMLHttpRequest();
            request.open('POST', '../server.php');
    
            request.setRequestHeader('Content-type', 'aplication/json');
            const formData = new FormData(form);   
            
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);
            
            request.send(json);
    
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    requestMessage(message.success, '3px solid green', 0);
                    form.reset();
                    requestMessage(message.regular, '', 2000);
                } else {
                    requestMessage(message.failure, '3px solid red', 0);
                    form.reset();
                    requestMessage(message.regular, '', 2000);
                }
            });
        });
    }  
});





