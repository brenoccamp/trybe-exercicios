// Exercícios do bloco 4.3- logica de programação e algoritmos
// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// Primeiro passo: Definir o valor de n;
// Segundo passo: Montar a estrutura de repetição para imprimir o valor de n em asteriscos.
// Terceiro passo: Imprimir uma linha a cada execução do primeiro for.
// let n = 6;
// let symbol = '*';
// let quadrado = '';
// for (let index = 0; index < n; index += 1) {
//   quadrado += symbol;
// }
// for (let index = 0; index < n; index += 1) {
// console.log(quadrado)
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// Primeiro passo: Definir o valor de n;
// Segundo passo: Criar a estrutura de repetição para percorrer o tamanho de n;
// Terceiro passo: Imprimir uma linha a cada execução do primeiro for, com o valor de n+1;
// let n = 5;
// let symbol = '*'
// let inputLine = '';
// for (index = 0; index <= n; index += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// }

// 3- Agora inverta o lado do triângulo.
// Primeiro passo: Definir a estrutura de repetição.
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine += ' ';
//     } else {
//       inputLine += symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// }

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlRight = midOfMatrix;
// let controlLeft = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < controlRight && columnIndex > controlLeft) {
//       inputLine += symbol;
//     } else {
//       inputLine += ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1;
// }

// BONUS- 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
