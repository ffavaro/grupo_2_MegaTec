const sequelize = require("sequelize");

module.exports = (sequelize, dataType) => {
const PurchaseDetail = sequilize.define ('PurchaseDetail',{
    id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTERGER(11)
    },

    purchase_id:{
    type: DataTypes.INTERGER(11)
    },

    product_id:{
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

    PurchaseDetail.associate = function(models){
        PurchaseDetail.belongsTo(models.Purchase,{
            as:"purchase",
            foreignKey: "detail_id"
        });

        // PurchaseDetail.belongsToMany(models.Product, {
        //     as:"type",
        //     foreignKey: "user_id"
        // });
    }

return PurchaseDetail

};