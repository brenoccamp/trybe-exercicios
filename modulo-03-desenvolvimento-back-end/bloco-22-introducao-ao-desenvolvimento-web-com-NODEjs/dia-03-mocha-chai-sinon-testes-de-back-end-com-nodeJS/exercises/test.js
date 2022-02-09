// Exercise 1 - Make the tests using mocha and chai for a function to verify if a number is positive, negative or neutral
const { expect } = require('chai');

const typeOfTheNumber = require('./exercise2');

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
