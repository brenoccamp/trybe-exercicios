const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'brenoccamp',
  password: 'Senha.123',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;