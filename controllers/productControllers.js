const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(
  __dirname,
  "../src/data/productsDataBase.json"
);
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales

let controller = {
  index: function (req, res) {
    let listProduct = products;
    res.render("home", { listProduct });
  },
  create: function (req, res) {
    res.render("./product/formularioProducto");
  },
  detail: function (req, res) {
    let product = products.find((x) => x.id == req.params.id);
    res.render("./product/productDetail", { product });
  },
  store: function (req, res) {
    let newProduct = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
    };

    products.push(newProduct);
    let jsonProduct = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, jsonProduct); //Reemplaza el archivo JSON anterior por el nuevo producto
    res.redirect('home');
  },
  productCart: (req, res) => {
    res.render("./product/productCart");
  },
  delete: (req, res) => {
    let arrayProduct = products.filter((x) => x.id === req.params.id);
    fs.writeFileSync(productsFilePath, JSON.stringify(arrayProduct)); //Reemplaza el archivo JSON anterior por el nuevo producto
    let listProduct = products;
    res.render("home", { listProduct });
  },
};

module.exports = controller;
