// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// RESPOSTA: A função imprimirá os resultados de acordo com a ordem de chamada, ou seja, respeitando uma estrutura síncrona de execução, visto que não existe nenhuma função 'setTimeOut(){}' interferindo no tempo de execução das operações.
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C



// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// RESPOSTA: A ordem de finalização segue a ordem de declaração para todos os console.log que não recebem um 'setTimeOut'. Vendo os console.log das linhas 66, 67 e 68, percebemos que a linha 66 será a primeira a ser executada e finalizada. A linha 68 será a segunda, pois o tempo definido para sua execução foi de 2000 milisegundos, ou 2 segundos. Já a linha 67 será a terceira a ter sua execução finalizada pois foi definido para ela um tempo de 3000 milisegundos ou 3 segundos, se preferir.
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C