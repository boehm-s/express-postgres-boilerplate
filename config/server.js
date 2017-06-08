import http from 'http';
const debug = require('debug')('es6-express-api:server');

/* eslint no-console: 0 */  // --> OFF

const createServer = (app, port) => {
    var server = http.createServer(app);

    // const normalizePort = val => {
    // 	var port = parseInt(val, 10);
    // 	if (isNaN(port)) return val;
    // 	if (port >= 0)   return port;
    // 	return false;
    // };

    const onError = (error) => {
	const bind = ( 'string' === typeof port)
		? `Pipe ${port}`
		: `Port ${port}`;

	if ('listen' !== error.syscall)
	    throw error;
	if ('EACCES' === error.code) {
	    console.error(`${bind} requires elevated privileges`);
	    process.exit(1);
	} else if ('EADDRINUSE' === error.code) {
	    console.error(`${bind} is already in use`);
	    process.exit(1);
	} else {
	    throw error;
	}
    };

    const onListening = ()  => {
	const addr = server.address();
	const bind = ('string' === typeof addr )
		? `pipe ${addr}`
		: `port ${addr.port}`;

	debug(`Listening on ${bind}`);
    };

    server.on('error', onError);
    server.on('listening', onListening);

    return server;
};

export default createServer;
