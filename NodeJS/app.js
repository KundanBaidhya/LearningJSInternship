const http = require('http');

const routes = require('./routes');

const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log("yay I'm in the middleware now not loading");
    next();
})

app.use((req, res, next)=> {
    console.log("yay I'm in the another middleware");
    res.send("<h1>Hello from express js</h1>");
})



const server = http.createServer(app);

server.listen(3000);//using the server object to listen to the port 3000.