const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MovieModels = require('../../models/movieModel');

describe('Insert a new movie on DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertedId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  //Restauramos a função 'execute' original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('when it is successfully entered', () => {
    it('it returns an object', async () => {
      const response = await MovieModels.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it("the object has the new movie's 'id'", async () => {
      const response = await MovieModels.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});