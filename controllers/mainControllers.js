const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../src/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    index: function (req,res) {
        let listProduct = products;
        res.render('home', {listProduct});
    },
    singIn: function (req, res) {
        res.render('./users/singIn')
    }
}

module.exports = controller;