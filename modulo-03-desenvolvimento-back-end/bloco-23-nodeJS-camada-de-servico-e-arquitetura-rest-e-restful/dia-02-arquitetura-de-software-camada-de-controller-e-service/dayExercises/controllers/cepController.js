const cepService = require('../services/cepService');

const cepController = async (req, res, _next) => {
  try {
    const { cep } = req.params;
    
    const { error: { code, message } } = await cepService.cepValidation(cep);

    console.log(code);

    if (code === 'invalidData') {
      return res.status(400).json({ message });
    }

    if (code === 'notFound') {
      return res.status(404).json({ message: 'teste' });
    }

    return res.status(200).json({ message: 'sucesso' });

  } catch (e) {
    return e;
  }


}

module.exports = cepController;