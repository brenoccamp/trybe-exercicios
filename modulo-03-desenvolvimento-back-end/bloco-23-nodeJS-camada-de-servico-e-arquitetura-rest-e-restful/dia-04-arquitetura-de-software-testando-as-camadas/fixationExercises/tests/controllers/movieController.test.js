const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Calling create controller', () => {
  describe('when informed payload is not valid', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      /*
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */
      sinon.stub(MoviesService, 'create').resolves(false);
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesService.create.restore();
    });

    it('is called status with its code 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('is called json with its message "Invalid datas"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith('Invalid datas')).to.be.equal(true);
    });
  });

  describe("when it's successfully entered", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `true`.
      */
      sinon.stub(MoviesService, 'create').resolves(true);
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesService.create.restore();
    });

    it('is called status with its code 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('is called json with its message "Movie created successfully"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith('Movie created successfully')).to.be.equal(true);
    });
  });
})