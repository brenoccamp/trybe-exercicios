// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
// console.log(arrays.reduce((accumulator, number) => accumulator += number, []))
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);