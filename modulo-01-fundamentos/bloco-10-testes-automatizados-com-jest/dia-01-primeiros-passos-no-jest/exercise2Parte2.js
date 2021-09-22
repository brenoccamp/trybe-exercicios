// 2 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes do arquivo exercise2Parte2.test.js. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.
const techList = (array, name) => {
  if (array.length === 0) return `Vazio!`
  const sortedArray = array.sort();
  return sortedArray.reduce((acc, curr) => {
  let obj = {
    tech: curr,
    name: name,
  }
  acc.push(obj);
  return acc
  }, [])
}

module.exports = techList;