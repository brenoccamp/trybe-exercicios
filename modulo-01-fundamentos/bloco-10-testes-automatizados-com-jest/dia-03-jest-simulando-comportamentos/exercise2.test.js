// 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const exercise1 = require('./exercise1');
jest.mock('./exercise1');

test('Testando nova implementação da função randomNumber', () => {
  exercise1.randomNumber.mockImplementationOnce((a, b) => a / b);
  
  expect(exercise1.randomNumber(10, 2)).toBe(5);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise1.randomNumber).toHaveBeenCalledWith(10, 2);
});