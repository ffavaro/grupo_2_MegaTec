module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      "Category",
      {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT(11)
            },
        
            description:{
            type: DataTypes.STRING(255)    
            },
        
            state:{
            type: DataTypes.STRING(255)
            }
      },
      {
        timestamps: false,
      }
    );
    return Category;
}; 