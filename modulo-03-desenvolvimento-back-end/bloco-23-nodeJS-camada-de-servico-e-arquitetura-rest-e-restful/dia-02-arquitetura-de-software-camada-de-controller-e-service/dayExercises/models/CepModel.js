const connection = require('./connection');

const queryByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

  const queryResponse = await connection.execute(query, [cep]);

  console.log(queryResponse);

  if (!queryResponse.length) {
    return { error: { code: "notFound", message: "CEP Not Found" } };
  }
}

module.exports = {
  queryByCep,
};