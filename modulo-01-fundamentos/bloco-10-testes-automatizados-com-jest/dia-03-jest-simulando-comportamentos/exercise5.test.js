const exercise4 = require('./exercise4');
// 5 - Utilizando as mesmas funções do exercício 4, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
test('Verifica implementação da função toUpperCase e sua restauração para a implementação original', () => {
  // implementação original
  expect(exercise4.toUpperCase('breno')).toBe('BRENO');

  // criando o mock e substituindo a implementação
  const mockToUpperCase = jest.spyOn(exercise4, 'toUpperCase')
  .mockImplementation((string) => string.toLowerCase());

  exercise4.toUpperCase('BRENO');
  expect(mockToUpperCase).toHaveBeenCalled();
  expect(mockToUpperCase).toHaveBeenCalledTimes(1);
  expect(mockToUpperCase('BRENO')).toBe('breno');
  expect(mockToUpperCase).toHaveBeenCalledTimes(2);
  expect(mockToUpperCase).toHaveBeenCalledWith('BRENO');

  // restaurando a implementação original
  exercise4.toUpperCase.mockRestore();
  expect(exercise4.toUpperCase('breno')).toBe('BRENO');
  // expect(exercise4.toUpperCase).toHaveBeenCalled();  // -> Não funciona se não mockar de novo
  // expect(exercise4.toUpperCase).toHaveBeenCalledWith('breno');  // -> Não funciona se não mockar de novo
  // expect(exercise4.toUpperCase).toHaveBeenCalledTimes(1);  // -> Não funciona se não mockar de novo
});
