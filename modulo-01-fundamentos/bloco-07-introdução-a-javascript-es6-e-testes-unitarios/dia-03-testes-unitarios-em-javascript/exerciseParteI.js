// Praticando a implementação de testes - Parte 1
// EXERCÍCIOS 1 DA PARTE I
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

// 1.2 - Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9);

// 1.3 - Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0);

// 1.4 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => {
  sum(4, '5');
})
// 1.5 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);



// EXERÍCIOS 2 DA PARTE I
// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
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
// 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.strictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]) //Dá erro porque não foi usado deepStrictEqual
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // deepStrictEqual testa se dois objetos e seus objetos filhos são iguais, usando o operador ===.

// 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 2.3 - Verifique se o array passado por parâmetro não sofreu alterações
const myList = [1, 2, 3, 4, 5, 6];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [1, 2, 3, 4, 5, 6]);

// 2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const test = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(test, [1, 2, 3, 4]);



// EXERCÍCIOS 3 DA PARTE I
// 3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// const assert = require('assert');
function myRemoveWithoutCopy(arr, item) {
  // console.log(arr, item)
  for (let index = 0, len = arr.length; index < len; index += 1) {
    // console.log('len: '+len)
    // console.log('index: '+index)
    // console.log('arr[index]: '+arr[index])
    // console.log('FIM DO LOOP 1')
    if (arr[index] === item) {
      // const arrsplice = arr.splice(index, 1);
      arr.splice(index, 1);
      // console.log('arrSplice: '+arrsplice)
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}
myRemoveWithoutCopy([1, 2, 3, 4], 3)
// implemente seus testes aqui
// 3.1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 3.2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

// 3.3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const testList = [1, 2, 3, 4, 5, 6];
myRemoveWithoutCopy(testList, 5);
assert.strictEqual(testList.length, 5);

// 3.4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);



// EXERCÍCIOS 4 DA PARTE I
// 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// const assert = require('assert');
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
// implemente seus testes aqui
// 4.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');

// 4.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(9), 'fizz');

// 4.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(25), 'buzz');

// 4.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(13), 13);

// 4.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('Trybe'), false)



// EXERCÍCIOS 5 DA PARTE I
// 5 - Compare dois objetos para verificar se são idênticos ou não
// const assert = require('assert');
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};
const obj2 = {
  description: 'My Description',
  title: 'My Title',
};
const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);