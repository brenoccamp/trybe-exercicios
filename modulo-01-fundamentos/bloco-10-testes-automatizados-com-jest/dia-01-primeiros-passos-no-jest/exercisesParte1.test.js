const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./exercisesParte1');
// Exercicio 1
describe('Verifica se a função "sum" retorna a soma de "a" + "b"', () => {
  // 1.1 Teste se o retorno de sum(4, 5) é 9
  it('Verifica se sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // 1.2 Teste se o retorno de sum(0, 0) é 0
  it('Verifica se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  // 1.3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  // 1.4 Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
})

// Exercicio 2
describe('Verifica se a função "myRemove" retorna o resultado esperado para cada verificação', () => {
  // 2/1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array sem o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // 2.2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
  // 2.3 Verifique se o array passado por parâmetro não sofreu alterações
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não altera diretamente o array passado por parâmetro', () => {
    const myArray = [1, 2, 3, 4];
    myRemove(myArray, 3);
    expect(myArray).toEqual([1, 2, 3, 4]);
  });
  // 2.4 Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Exercicio 3
describe('Verifica se a função "myRemoveWithoutCopy" recebe um array e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  // 3.1 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arrayToModifie = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(arrayToModifie, 3)).toEqual([1, 2, 4]);
  });
  // 3.2 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3,
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  });
  // 3.3 Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const arrayToModifie = [1, 2, 3, 4];
    myRemoveWithoutCopy(arrayToModifie, 3);
    expect(arrayToModifie).not.toContain(3);
  });
  // 3.4 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Exercicio 4
describe('Verifica se a função "myFizzBuzz" tem o comportamento esperado...', () => {
  // 4.1 Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // 4.2 Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  // 4.3 Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o "buzz"', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  // 4.4 Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio parâmetro(numero)', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  // 4.5 Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('7')).toBe(false);
  });
});


// Exercicio 5 - Compare dois objetos para verificar se são idênticos ou não
describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  // Comparando se obj1 é identico ao obj2
  it('Comparação entre obj1 e obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  // Comparando se obj1 é diferente ao obj3
  it('Comparação entre obj1 e obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  // Comparando se obj2 é diferente ao obj3
  it('Comparação entre obj2 e obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
})