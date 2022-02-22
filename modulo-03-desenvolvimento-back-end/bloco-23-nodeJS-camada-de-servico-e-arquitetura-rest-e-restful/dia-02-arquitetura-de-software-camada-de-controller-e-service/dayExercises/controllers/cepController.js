const cepService = require('../services/cepService');

const getByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;

    const { status, message } = await cepService.cepValidation(cep);

    return res.status(status).json(message);

  } catch (e) {
    console.error(e.message);
    next(e);
  }
}

module.exports = {
  getByCep,
  
};