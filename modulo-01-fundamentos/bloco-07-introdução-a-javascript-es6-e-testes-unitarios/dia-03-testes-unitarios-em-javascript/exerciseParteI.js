// Praticando a implementação de testes - Parte 1
// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui
// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
assert.strictEqual(typeof sum, 'function');

// 2 - Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9);

// 3 - Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0);

// 4 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => {
  sum(4, '5');
})
// 5 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);


// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// const assert = require('assert');
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  // console.log(typeof arr)
  // console.log(typeof item)
  // console.log(typeof newArr)
  return newArr;
}
// myRemove([1, 2, 3, 4], 3)
// implemente seus testes aqui
// 1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.strictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // deepStrictEqual testa se dois objetos e seus objetos filhos são iguais, usando o operador ===.

// 2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3 - Verifique se o array passado por parâmetro não sofreu alterações
const myList = [1, 2, 3, 4, 5, 6];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [1, 2, 3, 4, 5, 6]);

// 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const test = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(test, [1, 2, 3, 4]);
