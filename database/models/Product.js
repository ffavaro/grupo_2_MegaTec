import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const Category = Cat
const Product = sequelize.define(
  "Product",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTERGER(11),
    },
    name: {type :dataType.VARCHAR(255)},
    price: { type: dataType.DECIMAL(11)},
    discount: { type: dataType.INTERGER(11)},
    category: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Category,
          // This is the column name of the referenced model
          key: 'id',
         // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      
    },
    description: {type :dataType.VARCHAR(255)},
    image: {type :dataType.VARCHAR(255)},
  },
  {
    timestamps: false,
  }
);

return Product;
