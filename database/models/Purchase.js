const sequelize = require("sequelize");

module.exports = (sequelize, dataType) => {
const Purchase = sequilize.define ('Purchase',{

    id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTERGER(11)
    },

    date:{
    type: dataType.datetime(0)  
    },

    number:{
    type: dataType.INTERGER(11)
    },

    user_id:{
    type: DataTypes.INTERGER(11)   
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