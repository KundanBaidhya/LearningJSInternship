const fs = require('fs');

const requestHandler=(req, res)=>{
    
    const url = req.url;//gets the url from the request object and stores it in the url const.
    const method = req.method;//gets the method from the request object and stores in the method const.


    if(url==="/"){//checks if the url is just / and if the url is a string then if it's true executes the following code.
        res.setHeader('contentType', 'text/html');//setting the header as contentType and the format as html in the response object.
        res.write('<html>');//sending the html file to be rendered in the browser.
        res.write('<head><title>My Server</title></head>');
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='Submit'>weeee</button></form><body>");
        res.write('</html>');
        return res.end();
    }


    if(url==="/message" && method==="POST"){//checks if the url is /message and if the method is POST then if it's true executes the following code.
        const body = [];//making an array named body to store the incoming chunk.

        req.on('data', (chunk)=>{//adding the event listener on the request object to get the data, passing the chunk object as a parameter.
            console.log(chunk);
            body.push(chunk);//taking the chunk and storing it into the body array.
        });

        req.on('end', ()=>{//adding the event listener on the request object to get run a function when the incoming data ends.
            const parsedBody = Buffer.concat(body).toString();//using the buffer object to concat the body array and convert it into a string
            console.log(parsedBody);                          //and storing it into parsedBody.
            const message = parsedBody.split('=')[1];//splitting the parsedBody string from '=' and getting the string in the second position which is [1]
            console.log(message);                    //and storing the string into a constant named message.
            fs.writeFileSync('message.txt', message);//using the file system object to write the message into the message.txt file.
        });

        
        res.statusCode = 302;//after all that is done instead of keeping the client to the /message file redirecting them to the just / location using
        res.setHeader('location', '/');//code 302 which is for redirect
        return res.end();
    }


    res.setHeader('contentType', 'text/html');//if the url is neither / nor /message then this html will get rendered
        res.write('<head><title>My Server</title><head>');
        res.write('<body><h1>My First Node.js Server</h1><body>');
        res.end();
} 

module.exports.handler = requestHandler;