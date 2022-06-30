const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../src/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    index: function (req,res) {
        let listProduct = products;
        res.render('home', {listProduct});
    },
    detail: function (req, res) {
        let product = products.find(x => x.id == req.params.id);
        res.render('./product/productDetail', {product})
    },
    formProduct: function (req,res) {
        res.render('./product/formularioProducto')
    },
    productCart: (req, res) =>{
        res.render('./product/productCart')
    }
}

module.exports = controller;