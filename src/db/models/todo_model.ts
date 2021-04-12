var Sequelize = require('sequelize');
const db = require('../index');
require('dotenv').config();
const Todos = db.define(
  process.env.DB_NAME,
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
    },
    order: {
      type: Sequelize.DECIMAL,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Todos;
