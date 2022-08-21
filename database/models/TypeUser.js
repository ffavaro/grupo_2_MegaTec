const sequelize = require("sequelize");

module.exports = (sequelize, dataType) => {
const TypeUser = sequilize.define ('TypeUser',{
    id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTERGER(11)
    },

    name:{
    type: dataType.VARCHAR(255)    
    },

    state:{
    type: dataType.VARCHAR(255)
    }

},
{
    timestamps: false
})
return TypeUser
};