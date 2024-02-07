const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);//using the server object to listen to the port 3000.