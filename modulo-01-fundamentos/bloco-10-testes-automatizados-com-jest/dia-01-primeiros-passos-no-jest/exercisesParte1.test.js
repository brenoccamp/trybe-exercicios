const { sum, myRemove } = require('./exercisesParte1');
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