const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../src/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//express-validation
const {validationResult}=require('express-validator');


let controller = {
    index: function (req,res) {
        let listProduct = products;
        res.render('home', {listProduct});

    }
}

module.exports = controller;