// Reescrevendo funções utilizando TDD - Parte 3
// Agora mudamos um pouco: temos uma função pronta(e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada.Escreva testes de modo a entender e testar o comportamento da função e, depois, altere - a para que passe nos testes.Use os casos de teste da ParteI e ParteII como inspiração, se tiver dúvidas!
// Lembre - se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
// 1 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greetPeople = (people) => {
  let greeting = 'Hello ';
  const newResult = [];
  for (const person in people) {
    newResult.push(greeting + people[person]);
  }
  return newResult;
};
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);



// 2 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let countVowel = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      countVowel += 1;
      results.push(characters[index] = countVowel);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter2 = 'Dayane';
const result2 = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels(parameter2), result2);