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

module.exports = sequelize;
