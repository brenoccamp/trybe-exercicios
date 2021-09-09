const books = require('./base');
const assert = require('assert');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((accumulator, current, index, array) => (index === array.length -1) ? `${accumulator} ${current.author.name}.` : `${accumulator} ${current.author.name},`, '').trim();
}

assert.strictEqual(reduceNames(), expectedResult);
