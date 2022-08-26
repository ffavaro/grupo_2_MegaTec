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

        TypeUser.associate = function(models){
        TypeUser.hasMany(models.User,{
            as:"users",
            foreignKey: "type_id"
        });
    }

return TypeUser

};