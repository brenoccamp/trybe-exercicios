require('dotenv').config();

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "port": DB_PORT,
    "host": HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "port": DB_PORT,
    "host": HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "port": DB_PORT,
    "host": HOST,
    "dialect": "mysql"
  }
}
