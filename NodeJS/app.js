const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req, res)=>{
    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;
    if(url==="/"){
        res.setHeader('contentType', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Server</title><head>');
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='Submit'>weeee</button></form><body>");
        res.write('</html>');
        return res.end();
    }
    if(url==="/message" && method==="POST"){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
        });

        
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