const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Book } = require('../../../models');

describe('Retrieve all books', () => {
  describe('When is not have any book registered', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app).get('/books');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('return status 200', async () => {
      const result = await chai.request(app).get('/books');

      expect(result.status).to.be.equals(200);
    });

    it('returned response is an array', async () => {
      const result = await chai.request(app).get('/books');

      expect(result.body).to.be.an('array');
    });

    it('returned array is empty', async () => {
      const result = await chai.request(app).get('/books');

      expect(result.body).to.be.an('array').to.be.empty;
    });
  });
});