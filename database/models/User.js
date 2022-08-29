const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT(11),
        },
    
        firstname: {
            type: DataTypes.STRING(255),
        },
    
        lastname: {
            type: DataTypes.STRING(255),
        },
    
        email: {
            type: DataTypes.STRING(255),
        },
    
        password: {
            type: DataTypes.STRING(255),
        },
    
        image: {
            type: DataTypes.STRING(255),
        },
    
        type_id: {
            foreingKey: true, //Preguntar si esto se pone
            type: DataTypes.BIGINT(11),
        },
    },
    {
        timestamps: false
    })

   User.associate = function(models){
        User.hasMany(models.Purchase,{
            as:"purchases",
            foreignKey: "user_id"
        });

        User.belongsTo(models.TypeUser, { //Preguntar si la asociación va en una de las tablas es decir en tipo de usuario
            as:"type",
            foreignKey: "type_id"
        });
    }
    return User;
}