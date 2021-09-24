const exercise1 = require('./exercise1');
jest.mock('./exercise1');
// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
test('Testa novas implementações com mock', () => {
  exercise1.randomNumber.mockImplementation((a, b, c) => a * b * c);

  expect(exercise1.randomNumber(2, 3, 5)).toBe(30);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledWith(2, 3, 5);
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);

  exercise1.randomNumber.mockReset();
  exercise1.randomNumber.mockImplementation((a) => a * 2);

  expect(exercise1.randomNumber(5)).toBe(10);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledWith(5);
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
});