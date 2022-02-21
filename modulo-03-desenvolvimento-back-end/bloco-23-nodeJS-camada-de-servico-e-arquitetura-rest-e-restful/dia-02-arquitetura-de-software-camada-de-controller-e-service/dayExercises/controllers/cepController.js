const cepService = require('../services/cepService');

const cepController = async (req, res, _next) => {
  try {
    const { cep } = req.params;
    
    const response = await cepService.cepValidation(cep);

    if (response.status === 400) {
      return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } });
    }

    if (response.status === 404) {
      return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } });
    }

    return res.status(200).json(response.queryResponse);

  } catch (e) {
    console.error(e);
  }


}

module.exports = cepController;