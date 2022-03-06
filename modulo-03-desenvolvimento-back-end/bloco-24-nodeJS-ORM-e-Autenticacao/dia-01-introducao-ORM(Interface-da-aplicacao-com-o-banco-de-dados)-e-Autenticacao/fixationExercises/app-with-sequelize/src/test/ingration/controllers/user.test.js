const chai = require('chai');
const { stub } = require('sinon');
const chatHttp = require('chai-http');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../../index');
const { User } = require('../../../models');

describe('Get all users', () => {
  describe('Which is not exist any use registered', () => {
    const findAllStub = stub(User, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called User.findAll', async () => {
      await chai.request(app).get('/user');

      expect(User.findAll.calledOne).to.be.equals(true);
    });

    it('return status equals 200', async () => {
      const result = await chai.request(app).get('/user');

      expect(result.status).to.be.equals(200);
    });

    it('return is an array', async () => {
      const result = await chai.request(app).get('/user');

      expect(result.body).to.be.an('array');
    });

    it('the array is empty', () => {
      const result = await chai.request(app).get('/user');

      expect(result.body).to.be.empty;
    });
  });
});