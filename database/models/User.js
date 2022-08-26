const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
const User = sequelize.define  ( 'User', {

    id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTERGER(11)
    },

    first_name:{
    not_null,
    type: dataTypes.VARCHAR(255)
    },

    last_name:{
    not_null,
    type: dataTypes.VARCHAR(255)
    },

    email:{
    type: dataTypes.VARCHAR(255)
    },

    password:{
    type: dataTypes.VARCHAR(255)
    },

    path_avatar:{
    type: dataTypes.VARCHAR(255)  
    },

    type_id:{
    type: DataTypes.INTERGER(11)
    }
},{
    timestamps: false
})

    User.associate = function(models){
        User.hasMany(models.Purchase,{
            as:"purchases",
            foreignKey: "user_id"
        });

        User.belongsTo(models.TypeUser, {
            as:"type",
            foreignKey: "user_id"
        });
}
    return User
}