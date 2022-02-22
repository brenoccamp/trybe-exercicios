const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'brenoccamp',
  password: 'Senha.123',
  database: 'model_example',
});

module.exports = connection;