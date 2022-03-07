const {
  sequelize,
  dataTypes,
  checkModelName, 
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../models/book');

describe('BookModel', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('has name Book', () => {
    checkModelName(Book)('Book');
  });

  describe('have properties: "title", "author", "pageQuantity"', () => {
    ["title", "author", "pageQuantity"].forEach(checkPropertyExists(book));
  });
});