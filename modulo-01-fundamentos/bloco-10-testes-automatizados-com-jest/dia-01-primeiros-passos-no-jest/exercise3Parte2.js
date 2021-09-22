// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:
// string recebida
// '1 cerveja'
// // retorno da função
// '1 copo de água'

// // string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// // retorno da função
// '4 copos de água'

// // string recebida
// '2 caipirinhas'
// // retorno da função
// '2 copos de água'
// Implemente a função hydrate a partir dos testes do arquivo exercise3Parte2.test.js. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código .
const hydrate = (string) => {
  // const glassesOfWater = [...string].reduce((acc, curr) => {
  //   if (!parseInt(curr, 10)) return acc;
  //   return acc += Number(curr);
  // }, 0);
  // if (glassesOfWater === 1) return `1 copo de água`;
  // return `${glassesOfWater} copos de água`;
  const glassesOfWater = [...string].filter((letter) => Number(letter))
  .reduce((acc, curr) => acc += Number(curr), 0);
  if (glassesOfWater > 1) return `${glassesOfWater} copos de água`;
  return `${glassesOfWater} copo de água`;
}

module.exports = hydrate;
