const { SerialPort, ReadlineParser } = require('serialport');

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {  
  app.use(express.static(__dirname + '/dist'));
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

const port = new SerialPort({
    path:'COM8',  
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
  }, function (err) {
    if (err) {
        return console.log("Error: ", err.message);
    }
  })

  port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })

  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
  
  parser.on('data', function (data) {   
    io.emit('data', data);   
  })

  






