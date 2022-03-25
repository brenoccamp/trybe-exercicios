import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

const { DB_HOSTNAME, DB_USER, DB_PASSWORD, DB_DATABASE} = dotenv.config().process.env;

export default mysql.createPool({
  host:DB_HOSTNAME,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_DATABASE,
});