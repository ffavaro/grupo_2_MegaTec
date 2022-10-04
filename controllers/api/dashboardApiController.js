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
    db.Product.findAll({ limit: 1, order: [ [ 'id', 'DESC' ]]})
    .then((data) => {
      let product = null;
      data.forEach((elem) => {
        product = {
          id: elem.id,
          name: elem.name,
          price: elem.price,
          discount: elem.discount,
          category_id: elem.Category,
          brand_id: elem.Brand,
          stock: elem.stock,
          description: elem.description,
          image: `http://localhost:3000/api/product/image/${elem.id}`,
        };

      });
      res.send(product);
    });
  },
   /** ● Panel de detalle de último producto o usuario creado.*/
  getLastUser: async (req, res) => {
    db.User.findAll({ limit: 1,order: [ [ 'id', 'DESC' ]]})
    .then((user) => {
      let data = [];

      user.forEach(element => {
          let user = {name:"", email:"", avatar:""};
          user.name = element.firstname + " - " + element.lastname;
          user.email = element.email;
          user.avatar = `http://localhost:3000/api/users/avatar/${element.id}`;
          data.push(user);                
      });

      res.send({ data });
    });
  },
  /* ● Panel de categorías con el total de productos de cada una.*/
  getAllCategorWithProduct: async (req, res) => {
    db.Product.findAll({
      include: [{ model: db.Category, as: "Category" }],
    }).then((product) => {
      let json = { countByCategory: [] };
      let countOffer = 0;
      let countNew = 0;

      product.forEach((elem) => {
        if (elem.Category.dataValues.id === 1) countOffer++;
        else countNew++;
      });

      json.countByCategory.push({ name: "En Oferta", countProduct: countOffer });
      json.countByCategory.push({ name: "Nuevo", countProduct: countNew });

      res.send({ json });
    });
  },
  /* ● Panel con el listado de productos. */
  getAllProduct: async (req, res) => {
    let products = [];
    db.Product.findAll()
    .then((data) => {
      data.forEach((elem) => {
        let product = {
          id: elem.id,
          name: elem.name,
          price: elem.price,
          discount: elem.discount,
          category_id: elem.Category,
          brand_id: elem.Brand,
          stock: elem.stock,
          description: elem.description,
          image: `http://localhost:3000/api/product/image/${elem.id}`,
        };
        products.push(product);
      });

      res.send(products);
    });
    /* db.Product.findAll().then((product) => {
      res.send(product);
    }); */
  },
};

module.exports = controller;
