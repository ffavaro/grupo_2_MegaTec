const path = require("path");
const fs = require("fs");
const db = require("../database/models");
const productsFilePath = path.join(
  __dirname,
  "../src/data/productsDataBase.json"
);
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales

let controller = {
  index: function (req, res) {
    db.Product.findAll().then((listProduct) => {
      res.render("home", { listProduct });
    });
  },
  store: function (req, res) {
    console.log(req.body)
    db.Product.create(
      {
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price),
        discount: parseInt(req.body.discount),
        category_id: req.body.category_id,
        stock: req.body.stock,
        brand_id: req.body.brand_id,
        image: req.file.filename
      }
    ).then(() => {
      res.redirect("/home");
    })
  },
  create: function (req, res) {
    res.render("./product/create");
  },
  detail: function (req, res) {
    /**
     * Filtro por el producto seleccionado
     * Y envio un listado de los productos en oferta
     */
    let listProduct = db.Product.findAll({
      where: {
        category_id: 2,
      },
      limit: 3,
    })
    .then(() => {
    })
    .then((res) => {
      return res;
    });

    db.Product.findByPk(req.params.id).then((product) => {
      res.render("./product/productDetail", { product, listProduct });
    });
  },
  productCart: (req, res) => {
    res.render("./product/productCart");
  },
  delete: (req, res) => {
    db.Product.destroy({where: {id: req.params.id}, force: true})
    .then(()=>{
      return res.redirect('/home')})
    .catch(error => res.send(error))
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("./product/edit", { product });
    });
  },
  update: (req, res) => {
    let productId = req.params.id;
    console.log(req.file);
    db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price),
        discount: parseInt(req.body.discount),
        category_id: req.body.category_id,
        stock: req.body.stock,
        brand_id: req.body.brand_id,
        image: req.file.filename
      },
      {
        where: { id: productId },
      }
    )
      .then(() => {
        return res.redirect("/home");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = controller;
