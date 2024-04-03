const express = require('express');

const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

//  /admin/add-product => GET
router.get('/add-product',(req, res, next)=> {
    res.render('add-product', {title : 'Adding product', path : '/admin/add-product'});
});

//  /admin/add-product => POST
router.post('/add-product',(req, res, next)=> {
    res.redirect('/');
    products.push({title : req.body.title});
});

exports.routes = router;
exports.products = products;