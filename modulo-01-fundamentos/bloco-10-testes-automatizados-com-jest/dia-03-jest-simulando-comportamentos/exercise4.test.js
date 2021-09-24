const exercise4 = require('./exercise4');
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
jest.mock('./exercise4');

test('Verifica nova implementação da função toUpperCase', () => {
  exercise4.toUpperCase.mockImplementation((string) => string.toLowerCase());

  expect(exercise4.toUpperCase('BRENO')).toBe('breno');
  expect(exercise4.toUpperCase).toHaveBeenCalled();
  expect(exercise4.toUpperCase).toHaveBeenCalledWith('BRENO');
  expect(exercise4.toUpperCase).toHaveBeenCalledTimes(1);
});

test('Verifica nova implementação da função sliceString', () => {
  exercise4.sliceString.mockImplementation((string) => string.slice(-1));

  expect(exercise4.sliceString('Breno')).toBe('o');
  expect(exercise4.sliceString).toHaveBeenCalled();
  expect(exercise4.sliceString).toHaveBeenCalledWith('Breno');
  expect(exercise4.sliceString).toHaveBeenCalledTimes(1);
});

test('Verifica nova implementação da função concatString', () => {
  exercise4.concatString.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(exercise4.concatString('Breno', ' da', ' Cunha')).toBe('Breno da Cunha');
  expect(exercise4.concatString).toHaveBeenCalled();
  expect(exercise4.concatString).toHaveBeenCalledWith('Breno', ' da', ' Cunha');
  expect(exercise4.concatString).toHaveBeenCalledTimes(1);
});