require('dotenv').config();
const { DB_LOGIN, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_LOGIN,
    password: DB_PASSWORD,
    database: 'todos',
    host: 'localhost',
    dialect: 'postgres',
  },
};
