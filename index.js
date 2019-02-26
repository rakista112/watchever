const chokidar = require('chokidar');
const net = require('net');
let options = {

};
let listeners = [];
let server = net.createServer((c)=> {
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    listeners.push(c);

});

server.listen(8124, () => {
    console.log('server bound');
});
let connection = net.createConnection({ port: 8124 });
chokidar.watch('.', {}).on('all', (event, path) => {
    let result = {
        event: event,
        path: path
    };
    let jsonResult = JSON.stringify(result);
    for(let listener of listeners){
        listener.write(jsonResult + '\r\n');
    }
});
