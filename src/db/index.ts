var { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_LOGIN,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
const queryInterface = sequelize.getQueryInterface();
queryInterface.createTable(process.env.DB_NAME, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  isCompleted: DataTypes.BOOLEAN,
  order: DataTypes.DECIMAL,
});
module.exports = sequelize;
