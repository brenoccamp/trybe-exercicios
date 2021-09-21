const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./exercisesParte1');

// Exercicio 1
describe('Verifica se a função "sum" retorna a soma de "a" + "b"', () => {
  // 1.1
  it('Verifica se sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // 1.2
  it('Verifica se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  // 1.3
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  // 1.4
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
})

// Exercicio 2
describe('Verifica se a função "myRemove" retorna o resultado esperado para cada verificação', () => {
  // 2/1
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array sem o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // 2.2
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
  // 2.3
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não altera diretamente o array passado por parâmetro', () => {
    const myArray = [1, 2, 3, 4];
    myRemove(myArray, 3);
    expect(myArray).toEqual([1, 2, 3, 4]);
  });
  // 2.4
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Exercicio 3
describe('Verifica se a função "myRemoveWithoutCopy" recebe um array e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  // 3.1
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arrayToModifie = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(arrayToModifie, 3)).toEqual([1, 2, 4]);
  });
  // 3.2
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  });
  // 3.3
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const arrayToModifie = [1, 2, 3, 4];
    myRemoveWithoutCopy(arrayToModifie, 3);
    expect(arrayToModifie).not.toContain(3);
  });
  // 3.4
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Exercicio 4
describe('Verifica se a função "myFizzBuzz" tem o comportamento esperado...', () => {
  // 4.1
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // 4.2
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  // 4.3
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o "buzz"', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  // 4.4
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio parâmetro(numero)', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  // 4.5
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('7')).toBe(false);
  });
});