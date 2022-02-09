// Exercise 1 - Make the tests using mocha and chai for a function to verify if a number is positive, negative or neutral
const { expect } = require('chai');

const typeOfTheNumber = require('./exercise2');
const writingInAFile = require('./exercise5');

describe('Testing function typeOfTheNumber', () => {
  describe('Number bigger than zero', () => {
    it('Function returns "postive"', () => {
      const response = typeOfTheNumber(2);

      expect(response).to.be.equals('Positive');
    });
  });

  describe('Number smaller than zero', () => {
    it('Function returns "negative"', () => {
      const response = typeOfTheNumber(-1);

      expect(response).to.be.equals('Negative');
    });
  });

  describe('Number equal to zero', () => {
    it('Function returns "neutral"', () =>{
      const response = typeOfTheNumber(0);

      expect(response).to.be.equals('Neutral');
    });
  });

  // Exercise 3 - Being certain that the function typeOfTheNumber can receive only number
  describe('Receiving NaN', () => {
    it('Function returns "The value must be a number!"', () => {
      const response = typeOfTheNumber('Testing the function');

      expect(response).to.be.equals('The value must be a number!');
    });
  });
});

// Exercise 4 - Create tests for a function that will write content to a specific file.
describe('Testing a function that will write a content on a specific file', () => {
  describe('After concludes', () => {
    it("Function returns 'ok' and the function's return is a string", () => {
      const file = 'exercise4.txt';
      const content = 'Writing a content and testing using mocha and chai';
      const response = writingInAFile(file, content);

      expect(response).to.be.a('string');
      expect(response).to.be.equals('ok');
    });
  });
});

// Exercise 5.2 and 5.3 - Tailor the tests by adding stub to the used fs module, thus isolating the test.
const fs = require('fs');
const sinon = require('sinon');
describe('Testing writingInAFile function using now sinon and stub', () => {
  describe('Writed with success', () => {
    before(() => {

    })
  })
})
