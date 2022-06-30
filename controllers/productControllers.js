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
    create: function (req,res) {
        res.render('./product/formularioProducto')
    },
    store: function ( req,res) {

            let newProduct = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                category:  req.body.category
            }

            products.push(newProduct);
            let jsonProduct = JSON.stringify(products);
            fs.writeFileSync(productsFilePath, jsonProduct);
    },
    productCart: (req, res) =>{
        res.render('./product/productCart')
    }
}

module.exports = controller;