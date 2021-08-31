// Praticando TDD - Parte 2
// Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!
// Escrevendo código para testes
// Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código :
// Copie os testes já implementados e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.
// EXERCICIO 1 - PARTE II
// 1 - Escreva a função addOne para passar nos testes já implementados.
const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);



// 2 - Escreva a função wordLengths para passar nos testes já implementados.
// const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  const output = [];
  for (let i = 0; i < words.length; i += 1) {
    output.push(words[i].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected1 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output1 = wordLengths(words);
assert.deepStrictEqual(output1, expected1);



// 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.
// const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
  let newOutput = 0;
  for (let item of array) {
    newOutput += item;
  }
  return newOutput;
}
const numbers = [9, 23, 10, 3, 8];
const expected2 = 53;
const output2 = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output2, expected2);



// 4 - Escreva a função findTheNeedle para passar nos testes já implementados.
// const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (param1, param2) => {
  let freshOutput = -1;
  for (let item in param1) {
    if (param1[item] === param2) {
      freshOutput = Number(item)
    }
  }
  return freshOutput;
}
// findTheNeedle(words2, 'needle')

let words2 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words2, 'needle');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words2, 'plant');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words2, 'plat');
assert.strictEqual(output4, expected4);
