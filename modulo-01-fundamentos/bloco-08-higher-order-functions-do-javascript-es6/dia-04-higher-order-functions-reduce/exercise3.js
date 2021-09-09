const books = require('./base');
const assert = require('assert');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const numberOfAuthors = books.length
  const sumOfAges = books.reduce((accumulator, current) => accumulator += (current.releaseYear - current.author.birthYear), 0);
  return sumOfAges / numberOfAuthors;
}

assert.strictEqual(averageAge(), expectedResult);
