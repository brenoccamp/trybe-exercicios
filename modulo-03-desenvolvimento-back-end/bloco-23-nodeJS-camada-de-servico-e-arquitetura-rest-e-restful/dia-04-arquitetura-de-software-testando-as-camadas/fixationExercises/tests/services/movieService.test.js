const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
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

  describe('when it is successfully entered', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesService, 'create').resolves({ id: ID_EXAMPLE });
    })

    after(() => {
      MoviesService.create.restore();
    });

    it('it returns an object', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.an('object');
    });

    it("the returned object has the inserted movie's 'id'", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    })
  });
});