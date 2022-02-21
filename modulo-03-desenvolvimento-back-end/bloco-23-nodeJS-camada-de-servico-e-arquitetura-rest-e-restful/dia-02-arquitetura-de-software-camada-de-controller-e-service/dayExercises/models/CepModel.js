const connection = require('./connection');

const queryByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';

  const [queryResponse] = await connection.execute(query, [cep]);

  return {
    status:200,
    message: queryResponse[0],
  };
}

module.exports = {
  queryByCep,
};