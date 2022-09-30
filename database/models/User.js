const sequelize = require("sequelize");
const TypeUser = require("./TypeUser");

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
        references: {
          model: TypeUser,
          key: "category_id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "users"
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Purchase, {
      foreignKey: "user_id",
    });

    User.belongsTo(models.TypeUser, {
      foreignKey: "type_id",
    });
  };
  return User;
};
