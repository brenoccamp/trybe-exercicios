// Agora a prática
// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 1500);
};

test('Verifica a chamada da callback da função uppercase', (done) => {
  uppercase('ola programador', (result) => {
    try {
      expect(result).toBe('OLA PROGRAMADOR');
      done();
    } catch (error) {
      done(error);
    }
  });
  // PODEMOS TAMBÉM FAZER DA FORMA ABAIXO:
  // const callback = (result) => {
  //   expect(result).toBe('OLA PROGRAMADOR1');
  //   done();
  // }
  // uppercase('ola programador', callback);
});