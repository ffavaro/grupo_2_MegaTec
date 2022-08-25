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

      state: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
    }
  );
  return TypeUser;
};
