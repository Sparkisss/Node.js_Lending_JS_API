var SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.ReadLine({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev', {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
