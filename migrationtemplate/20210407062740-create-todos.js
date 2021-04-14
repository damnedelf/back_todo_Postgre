'use strict';
var { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      isCompleted: { type: DataTypes.BOOLEAN, allowNull: false },
      order: { type: DataTypes.DECIMAL, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('todos');
  },
};
