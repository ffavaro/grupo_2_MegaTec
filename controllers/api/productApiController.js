const db = require("../../database/models");
const Category = require("../../database/models/Category");

let controller = {
  /* 
    ● api/products/
    ○ Deberá devolver un objeto literal con la siguiente estructura:
    ■ count → cantidad total de productos en la base.

    ■ countByCategory → objeto literal con una propiedad por categoría
    con el total de productos.
    
    ■ products → array con la colección de productos, cada uno con:
    ● id
    ● name
    ● description
    ● un array con principal relación de uno a muchos (ej:
    categories).
    ● detail → URL para obtener el detalle.*/
  getAll: async (req, res) => {
    db.Product.findAll({
      include: [{ model: db.Category, as: "Category" }],
    }).then((product) => {
      let json = { count: 0, countByCategory: [], products: [] };
      json.count = product.length;

      let countOffer = 0;
      let countNew = 0;

      product.forEach((elem) => {
        let product = {
          id: 0,
          name: "",
          description: "",
          arrayCategory: null,
          detail: "",
        };
        
        product.id = elem.id;
        product.name = elem.name;
        product.description = elem.description;
        product.arrayCategory = elem.Category;
        product.detail = `http://localhost:3000/api/product/${elem.id}`;

        if (elem.Category.dataValues.id === 1) countOffer++;
        else countNew++;

        json.products.push(product);
      });

      json.countByCategory.push({ name: "En Oferta", countOffer });
      json.countByCategory.push({ name: "Nuevo", countNew });

      res.send({ json });
    });
  },
  /* 
    ● api/products/:id
    ○ Deberá devolver un objeto literal con la siguiente estructura:
    ■ una propiedad por cada campo en base.
    ■ un array por cada relación de uno a muchos (categories, colors,
    sizes, etc).
    ■ Una URL para la imagen del producto (para mostrar la imagen).
    */
  getById: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: [
        { model: db.Category, as: "Category" },
        { model: db.Brand, as: "Brand" },
      ],
    }).then((data) => {
      let product = {
        id: data.id,
        name: data.name,
        price: data.price,
        discount: data.discount,
        category_id: data.Category,
        brand_id: data.Brand,
        stock: data.tock,
        description: data.description,
        image: `http://localhost:3000/api/product/image/${data.id}`,
      };

      res.send({ product });
    });
  },
  /**
   * obtiene la imagen del producto
   */
  getImageById: (req, res) => {
    db.Product.findByPk(req.params.id).then((data) => {
      let path = `C:\\Users\\Francisco\\OneDrive\\Documentos\\Digital House\\MegaTec\\grupo_2_MegaTec\\public\\images\\product\\${data.image}`;
      res.sendFile(path);
    });
  },
};

module.exports = controller;
