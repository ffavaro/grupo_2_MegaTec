const Product = require("./Product");
const Purchase = require("./Purchase");

module.exports = (sequelize, DataTypes) => {
  const PurchaseDetail = sequelize.define(
    "PurchaseDetail",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },

      purchase_id: {
            type: DataTypes.BIGINT(11),
      },

      product_id: {
            type: DataTypes.BIGINT(11),
      },

      amount: {
        type: DataTypes.STRING(255),
      },

      price_unit: {
        type: DataTypes.STRING(255),
      },

      price_total: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
    }
  );

  PurchaseDetail.associate = function(models){
    PurchaseDetail.belongsTo(models.Product,{
        as:"detailProduct",
        foreignKey: "product_id"
    }) 

return PurchaseDetail;

};
}