const db = require("../../database/models");

let controller = {
  /* 
   ● 3 a 6 paneles simples con los siguientes totales:
    ○ Total de productos
    ○ Total de usuarios
    ○ Total de categorías
    ● Panel de detalle de último producto o usuario creado.
    ● Panel de categorías con el total de productos de cada una.
    ● Panel con el listado de productos.

    8
    (Opcional) Funcionalidades adicionales:
    ● Total de productos vendidos / total de ventas.
    ● Últimos 5 productos vendidos / los 5 más vendidos.
    ● Vista de creación de productos como Administrador.
    ● Vista de edición de productos como Administrador.
    ● Opción de eliminar productos como Administrador.*/
  /** ○ Total de productos */
  getCountAllProduct: async (req, res) => {
    db.Product.findAll().then((product) => {
      let total = product.length
      res.send({total});
    });
  },
  /** Total de usuarios */
  getCountAllUser: async (req, res) => {
    db.User.findAll().then((users) => {
      let total = users.length
      res.send({total});
    });
  },
  /*○ Total de categorías*/
  getCountAllCategory: async (req, res) => {
    db.Category.findAll().then((Category) => {
      let total = Category.length
      res.send({total});
    });
  },
  /** ● Panel de detalle de último producto o usuario creado.*/
  getLastProduct: async (req, res) => {
    db.Product.findAll({ limit: 1,order: [ [ 'id', 'DESC' ]]}).then((product) => {
      res.send(product);
    });
  },
  getLastUser: async (req, res) => {
    db.User.findAll({ limit: 1,order: [ [ 'id', 'DESC' ]]}).then((user) => {
      res.send(user);
    });
  },
  /* ● Panel de categorías con el total de productos de cada una.*/
  getAllCategorWithProduct: async (res, req) => {
    
  },
  /* ● Panel con el listado de productos. */
  getAllProduct: async (req, res) => {
    db.Product.findAll().then((product) => {
      res.send(product);
    });
  },
};

module.exports = controller;
