// 5 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
// Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.
// 1º: Imprime '1 - beforeEach'
// 2º: Imprime '1 - test'
// 3º: Imprime '1 - afterEach'
// 4º: Imprime '2 - beforeEach'
// 5º: Imprime '2 - test'
// 6º: Imprime '2 - afterEach'

//RESULTADO REAL:
// 1º: Imprime '1 - beforeEach'
// 2º: Imprime '1 - test'
// 3º: Imprime '1 - afterEach'
// 4º: Imprime '1 - beforeEach'
// 5º: Imprime '2 - beforeEach'
// 6º: Imprime '2 - test'
// 7º: Imprime '2 - afterEach'
// 8º: Imprime '1 afterEach'
