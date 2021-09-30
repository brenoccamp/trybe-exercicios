const exercise1 = require('./exercise1');

// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
test('Testa comportamento da função randomNumber', () => {
  exercise1.randomNumber = jest.fn().mockReturnValue(10);

  exercise1.randomNumber();
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber()).toBe(10);
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(2);
  expect(exercise1.randomNumber).toHaveBeenCalledWith();
});