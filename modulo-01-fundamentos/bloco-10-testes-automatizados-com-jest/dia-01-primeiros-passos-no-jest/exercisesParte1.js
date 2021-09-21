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
console.log(myRemove([1, 2, 3, 4], 5))
module.exports = { sum, myRemove }
// implemente seus testes aqui
// 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 2.3 - Verifique se o array passado por parâmetro não sofreu alterações
// 2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
