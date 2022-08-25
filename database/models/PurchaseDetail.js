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
        foreingKey: true, //Preguntar si esto se pone
        type: DataTypes.BIGINT(11),
      },

      product_id: {
        foreingKey: true, //Preguntar si esto se pone
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
  return PurchaseDetail;
};
