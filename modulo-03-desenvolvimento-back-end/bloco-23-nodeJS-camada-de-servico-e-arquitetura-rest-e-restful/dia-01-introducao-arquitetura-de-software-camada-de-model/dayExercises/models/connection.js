const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'brenoccamp',
  password: 'Senha.123',
  host: 'localhost',
  database: 'users_crud'
});

module.exports = connection;