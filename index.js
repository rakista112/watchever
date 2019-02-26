const chokidar = require('chokidar');
const net = require('net');
const stream = require('stream');
const commander = require('commander');
const ChangeStream = require('./streams/change-stream');
let options = {};

commander.version('0.0.1')
    .option('-p, --port [port]', 'choose port')
    .parse(process.argv);
let cPort = commander.port;
console.log('port is ' + cPort);
let cStream = new ChangeStream();
let server = net.createServer((c)=> {
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    cStream.pipe(c);
});

server.listen(cPort, () => {
    console.log('server bound');
    // listen to preferred
});
