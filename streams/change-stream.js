const { Readable } = require('stream');
const chokidar = require('chokidar');

// TODO: check listener for path, if different from existing paths, create another watcher
class ChangeStream extends Readable {
    constructor(options){
        super(options)
        let self = this;
        chokidar.watch('.', {}).on('all', (event, path) => {
            let result = {
                event: event,
                path: path
            };
            let jsonResult = JSON.stringify(result) + '\r\n';
            self.push(jsonResult);
        });
    }

    _read(size){
    }
}

module.exports = ChangeStream;
