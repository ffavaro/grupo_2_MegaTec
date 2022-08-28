const Category = require("./Category");
const Brand = require("./Brand");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      name: {type :DataTypes.STRING(255)},
      price: { type: DataTypes.DECIMAL(11)},
      discount: { type: DataTypes.BIGINT(11)},
      category_id:{type :DataTypes.BIGINT(255)},
      brand_id: {type :DataTypes.BIGINT(255)},
      stock: {type :DataTypes.BIGINT(255)},
      description: {type :DataTypes.STRING(255)},
      image: {type :DataTypes.STRING(255)},
    },
    {
      timestamps: false,
    }
  );

  return Product;
}; 