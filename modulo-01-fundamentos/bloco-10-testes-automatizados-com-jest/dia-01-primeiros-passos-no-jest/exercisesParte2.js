// Parte II
// No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions . Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as features do Javascript ES6.

// 1 - Para as funções encode e decode crie os seguintes testes:
function encode(string = '') {
  // seu código aqui
  const arrayOfLettersToEncode = ['a', 'e', 'i', 'o', 'u'];
  return [...string.toLowerCase()].reduce((acc, letter) => {
    if (arrayOfLettersToEncode.includes(letter)) {
      return acc += (1 + arrayOfLettersToEncode.indexOf(letter));
    }
    // console.log(acc += letter)
    return acc += letter;
  }, '')
}

function decode(string = '') {
  const baseToDecode = ['a', 'e', 'i', 'o', 'u'];
  return [...string.toLowerCase()].reduce((acc, letter) => {
    if (parseInt(letter, 10) > 5) return acc += letter;
    if (parseInt(letter, 10)) {
      return acc += baseToDecode[parseInt(letter, 10) - 1];
    }
    return acc += letter;
  }, '');
}

module.exports = { encode, decode };
// 1.1 - Teste se encode e decode são funções;
// 1.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// 1.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// 1.4 - Teste se as demais letras/números não são convertidos para cada caso;
// 1.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.