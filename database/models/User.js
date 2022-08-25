module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },

      first_name: {
        type: DataTypes.STRING(255),
      },

      last_name: {
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
      timestamps: false,
    }
  );
  return User;
};
