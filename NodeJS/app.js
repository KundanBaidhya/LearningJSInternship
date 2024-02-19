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



app.listen(3000);