const books = require('./base');
const assert = require('assert');
const { workerData } = require('worker_threads');
// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((book) => book.author.name.split(' ').filter((letter) => letter.endsWith('.')).length === 3).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
