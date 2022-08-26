module.exports = (sequelize, DataTypes) => {
  const TypeUser = sequelize.define(
    "TypeUser",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },

      name: {
        type: DataTypes.STRING(255),
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