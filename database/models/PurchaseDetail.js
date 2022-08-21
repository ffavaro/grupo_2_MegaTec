const sequelize = require("sequelize");

module.exports = (sequelize, dataType) => {
const PurchaseDetail = sequilize.define ('PurchaseDetail',{
    id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTERGER(11)
    },

    purchase_id:{
    foreingKey: true, //Preguntar si esto se pone
    type: DataTypes.INTERGER(11)
    },

    product_id:{
    foreingKey: true, //Preguntar si esto se pone
    type: DataTypes.INTERGER(11)
    },

    amount:{
    type: dataType.VARCHAR(255)    
    },

    price_unit:{
    type: dataType.VARCHAR(255)
    },

    price_total:{
    type: dataType.VARCHAR(255)
    }

},
{
    timestamps: false
})
return PurchaseDetail
};