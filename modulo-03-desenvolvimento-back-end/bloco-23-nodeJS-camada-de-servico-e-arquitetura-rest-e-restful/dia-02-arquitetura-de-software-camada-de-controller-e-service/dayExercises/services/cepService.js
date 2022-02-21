const CepModel = require('../models/CepModel');

const cepValidation = async (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cep.match(cepRegex)) {
    return { status: 400, message: { code: "invalidData", message: "Invalid CEP" } };
  }

  const modelResponse = await CepModel.queryByCep(cep);

  if (!modelResponse.message) {
    return { status: 404, message: { code: "notFound", message: "CEP not found" } };
  }

  modelResponse.message.cep = `${modelResponse.message.cep.substring(0, 5)}-${modelResponse.message.cep.substring(5)}`;

  return modelResponse;
}

module.exports = {
  cepValidation,
};