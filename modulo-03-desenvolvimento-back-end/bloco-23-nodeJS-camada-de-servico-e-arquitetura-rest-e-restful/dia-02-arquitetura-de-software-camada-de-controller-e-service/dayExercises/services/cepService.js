const CepModel = require('../models/CepModel');

const cepValidation = async (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cep.match(cepRegex)) {
    return { status: 400 };
  }

  const modelResponse = await CepModel.queryByCep(cep);

  console.log(modelResponse);

  if (!modelResponse.length) {
    return modelResponse;
  }

  return modelResponse;
}

module.exports = {
  cepValidation,
};