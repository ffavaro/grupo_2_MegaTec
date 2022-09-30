module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT(11),
          },
    
          description: {
            type: DataTypes.STRING(255),
          },
    
          state: {
            type: DataTypes.STRING(255),
          },
    },
    {
      timestamps: false,
      tableName: 'brand'
    }
  );
  return Brand;
};
