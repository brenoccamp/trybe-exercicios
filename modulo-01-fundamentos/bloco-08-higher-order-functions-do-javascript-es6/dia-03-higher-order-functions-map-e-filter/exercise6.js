const books = require('./base');
const assert = require('assert');
// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const olderBooks = books.filter((book) => 2021 - book.releaseYear >= 60);
  return olderBooks.map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);