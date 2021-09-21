const sum = require('./exercisesParte1');
describe('Verifica se a função "sum" retorna a soma de "a" + "b"', () => {
  it('Verifica se sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Verifica se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Verifica se sum(4, "5") lança um throw new Error("parameters must be numbers")', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
})