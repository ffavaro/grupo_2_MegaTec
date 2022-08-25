module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define(
    "Purchase",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },

      date: {
        type: DataTypes.DATE(0),
      },

      number: {
        type: DataTypes.BIGINT(11),
      },

      user_id: {
        type: DataTypes.BIGINT(11),
      },

      shipment: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
    }
  );
  return Purchase;
};
