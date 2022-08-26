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

    shipment:{
    type: dataType.VARCHAR(255)    
    }

},
{
    timestamps: false
})

    Purchase.associate = function(models){
        Purchase.belongsTo(models.User,{
            as:"user",
            foreignKey: "purchase_id"
        });
    }
    
    return Purchase
    
};