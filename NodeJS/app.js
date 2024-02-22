const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next)=> {
    res.send("<h1> <form action='/myProduct' method='POST'> <input type='text' name='title'> <button type='submit'> Send </button> </form> </h1>");
})

app.post('/myProduct',(req, res, next)=> {
    res.redirect('/');
    console.log(req.body);
})

app.use('/',(req, res, next)=> {
    res.send("<h1>Hello from express js</h1>");
})



app.listen(3000);