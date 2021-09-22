const { encode, decode } = require('./exercise1Parte2');

describe('Teste se encode e decode são funções', () => {
  // 1.1 - Teste se encode e decode são funções;
  it('Verifica se "encode" é uma função', () => {
    expect(typeof(encode)).toEqual('function');
  });
  it('Verifica se "decode" é uma função', () => {
    expect(typeof(decode)).toEqual('function');
  });
  // 1.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  it('Verifica se o retorno de encode("aeiou") é "12345"', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  // 1.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
  it('Verifica se o retorno de decode("12345") é "aeiou"', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  // 1.4 - ENCODE - Teste se as demais letras/números não são convertidos para cada caso;
  it('Verifica se quando encode recebe uma consoante, ou um numero, ela não faz a codificação', () => {
    expect(encode('bcdfg123')).toEqual('bcdfg123');
  });
  // 1.4 - DECODE
  it('Verifica se quando decode recebe uma vogal, ou um numero acima de 5, não faz a decodificação do caractere', () => {
    expect(decode('aeiou6789')).toEqual('aeiou6789');
  });
  // 1.5 - ENCODE - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  it('Verifica se o número de caracteres retornado por encode é o mesmo do inicio', () => {
    expect(encode('Testes com Jest').length).toEqual(15);
  });
  // 1.5 - DECODE
  it('Verifica se o número de caracteres retornado por decode é o mesmo do início', () => {
    expect(decode('T2st2s c4m J2st').length).toEqual(15);
  })
});