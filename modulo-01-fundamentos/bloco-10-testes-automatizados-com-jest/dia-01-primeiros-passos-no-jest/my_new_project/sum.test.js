// 1. - Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:
// const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });

// Depois disso, vamos até o terminal digitar npm test , se você receber uma resposta parecida com a resposta abaixo, tudo certo com a instalação!
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.237 s

// let name = "Pedro";
// let firstName = name;

// name = "Carol";
// firstName = name;

// console.log(name); // Carol
// console.log(firstName); // Pedro

function verifyNumbers(array) {
  const teste = array.every((number) => typeof(number) === 'number');
  return teste
}

// console.log(verifyNumbers([2, 3, 4, 5]))

// module.exports = verifyNumbers;

describe('Verifica numeros', () => {
  it('A função verifyNumber recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(verifyNumbers([1, 2, 3, 4, 5]))
  })
})