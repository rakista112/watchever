const chokidar = require('chokidar');
const net = require('net');
const stream = require('stream');
const ChangeStream = require('./streams/change-stream');
let options = {

};
let port = 8124;
let cStream = new ChangeStream();
let server = net.createServer((c)=> {
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    cStream.pipe(c);
});

server.listen(port, () => {
    console.log('server bound');
    // listen to preferred
});
let connection = net.createConnection({ port: port });
