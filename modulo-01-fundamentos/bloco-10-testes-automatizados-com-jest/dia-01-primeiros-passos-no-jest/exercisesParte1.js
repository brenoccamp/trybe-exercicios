// Parte I
// Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript , dessa vez utilizando Jest .
// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente os testes abaixo no arquivo exercisesParte1.test.js
// 1.1 - Teste se o retorno de sum(4, 5) é 9
// 1.2 - Teste se o retorno de sum(0, 0) é 0
// 1.3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 1.4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente os testes abaixo no arquivo exercisesParte1.test.js
// 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 2.3 - Verifique se o array passado por parâmetro não sofreu alterações
// 2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado


// 3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array.
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
// implemente os testes abaixo no arquivo exercisesParte1.test.js
// 3.1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// 3.2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 3.3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// 3.4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado


// 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente os testes abaixo no arquivo exercisesParte1.test.js
// 4.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// 4.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 4.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 4.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 4.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
module.exports = { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz };