const connection = require('./connection');

const queryByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';

  const [queryResponse] = await connection.execute(query, [cep]);

  if (!queryResponse.length) {
    return { status: 404 };
  }

  return {
    status: 200,
    queryResponse: {...queryResponse[0]},
  };
}

module.exports = {
  queryByCep,
};