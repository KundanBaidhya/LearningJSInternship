const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next)=> {
    res.send("<form action='/myProduct' method='POST'> <input type='text' name='title'> <button type='submit'> Send </button> </form>");
})

router.post('/myProduct',(req, res, next)=> {
    res.redirect('/');
    console.log(req.body);
})

module.exports = router;