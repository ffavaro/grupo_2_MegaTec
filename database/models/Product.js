import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Product = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});