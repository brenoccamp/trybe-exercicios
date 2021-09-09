const assert = require('assert');

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// console.log(names.map((name) => name.split('')))
function containsA() {
  // escreva seu código aqui
  return names.join('').split('').reduce((accumulator, current) => (current.toLowerCase() === 'a') ? accumulator += 1 : accumulator += 0, 0);
}

assert.deepStrictEqual(containsA(), 20);