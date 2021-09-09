const books = require('./base');
const assert = require('assert');

// 4 - Encontre o livro com o maior nome.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((accumulator, current) => (accumulator.name.split('').length) > current.name.split('').length ? accumulator : current)
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);