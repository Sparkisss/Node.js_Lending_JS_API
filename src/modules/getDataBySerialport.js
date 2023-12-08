import { io } from "socket.io-client";

// const socket = io();
// const temperature = document.getElementById('temperature'),
//     humidity = document.getElementById('humidity'),
//     counter = document.getElementById('counter');        

// let task = [];

// socket.on('data', (data) => {
//     for (let i = 0; i < 1; i++){
//         task.push(data);
//     }
//     if (task.length == 3) {
//         temperature.innerHTML = task[0];
//         humidity.innerHTML = task[1];
//         counter.innerHTML = task[2];
//         console.log(task);
//         task = [];
//     }
// });