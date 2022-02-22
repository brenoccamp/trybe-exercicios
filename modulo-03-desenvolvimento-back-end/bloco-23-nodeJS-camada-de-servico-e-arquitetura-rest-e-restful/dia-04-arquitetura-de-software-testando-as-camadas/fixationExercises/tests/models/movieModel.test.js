const { expect } = require('chai');
const MovieModels = require('../../models/movieModel');

describe('Insert a new movie on DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('when it is successfully entered', () => {
    it('it returns an object', async () => {
      const response = await MovieModels.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('the object has its new movie "id"', async () => {
      const response = await MovieModels.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});