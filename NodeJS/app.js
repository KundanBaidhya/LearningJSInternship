const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;
    if(url==="/"){
        res.setHeader('contentType', 'text/html');
        res.write('<head><title>My Server</title><head>');
        res.write("<body><form action='/message' method='POST'><input type='text' message><button type='submit'>weeee</button></form><body>");
        return res.end();
    }
    if(url==="/message" && method==="POST"){
        fs.writeFileSync('message.txt', 'Hello node world');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }
    res.setHeader('contentType', 'text/html');
        res.write('<head><title>My Server</title><head>');
        res.write('<body><h1>My First Node.js Server</h1><body>');
        res.end();
    //process.exit();
});

server.listen(3000);