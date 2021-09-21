// 1. - Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Depois disso, vamos até o terminal digitar npm test , se você receber uma resposta parecida com a resposta abaixo, tudo certo com a instalação!