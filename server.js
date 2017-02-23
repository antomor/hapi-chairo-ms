'use strict';
const Hapi = require('hapi');
const Good = require('good');
const Chairo = require('chairo');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }
});


server.register({
    register: Chairo
}, (err) => {
    if (err) {
        throw err;
    }

    var opts = { server: server };

    server.seneca.use('./api/math.js', opts);
    server.seneca.use('./api/hello.js', opts);
    server.seneca.use('./api/user.js', opts);

    server.start((err) => {
        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });

});

