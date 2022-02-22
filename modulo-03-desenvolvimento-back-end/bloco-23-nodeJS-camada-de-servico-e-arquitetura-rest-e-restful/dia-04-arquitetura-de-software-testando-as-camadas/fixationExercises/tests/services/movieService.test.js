const { expect } = require('chai');

const MoviesService = {
  create: () => {},
};

/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/

describe('Insert a new movie on DB', () => {
  describe('when informed payload is not valid', () => {
    const payloadMovie = {};

    it('it returns a boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('the boolean contains "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });
});