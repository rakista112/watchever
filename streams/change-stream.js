const { Readable } = require('stream');
const chokidar = require('chokidar');

class ChangeStream extends Readable {
    constructor(options){
        super(options)
        let self = this;
        chokidar.watch('.', {}).on('all', (event, path) => {
            let result = {
                event: event,
                path: path
            };
            let jsonResult = JSON.stringify(result);
            self.push(jsonResult + '\r\n');
        });
    }

    _read(size){
    }
}

module.exports = ChangeStream;
