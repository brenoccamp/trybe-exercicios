// EXERCÍCIOS DE FIXAÇÃO DO BLOCO 4.4.1 -JAVASCRIPT- OBJETOS E FUNÇÕES - OBJETOS
// 1- Crie um objeto player contendo as variáveis listadas abaixo.
//name, lastName, age, medals.
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, 
//         silver: 3
//     },
// 3- Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// };
// player.fullName = player.name + ' ' + player.lastName;
// // 2- Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')
// // 4- Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')
// // 5- Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// console.log('A jogadora ' + player.fullName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

// EXERCÍCIOS DE FIXAÇÃO DO BLOCO 4.4.2 -JAVASCRIPT- OBJETOS E FUNÇÕES - FOR/IN
// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:
// let cars = ['Saab', 'Volvo', 'BMW'];
// for (let index in cars) {
//     console.log(cars[index]);
//   }

//Um outro exemplo é a iteração nas chaves de um objeto:
// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// PARA FIXAR - EXERCÍCIO 1-  Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge'
// }
//   for (let name in names) {
//       console.log('Olá ' + names[name])
//   }

// 2- Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for(let properties in car) {
//       console.log(properties + ': ' + car[properties])
//   }

// EXERCÍCIOS DE FIXAÇÃO DO BLOCO 4.4.3-JAVASCRIPT- FUNÇÕES
// Que tal praticar um pouco?
// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:
// O programa...
// Copiar
// // Adição
// let a = 5;
// let b = 2;

// a + b;
// ... se transforma em:
// Copiar
// function sum(a, b) {
//   return a + b;
// }

// Adição: 
// let a = 5;
// let b = 10;
// function sum(a, b) {
//   return a + b;
// };
// console.log(sum(a, b));

// Subtração:
// let a = 5;
// let b = 10;
// function sub(a, b) {
//   return (a-b)
// };
// console.log(sub(a, b));

// Multiplicação: 
// let a = 5;
// let b = 10;
// function multiplication(a, b) {
//   return a * b;
// };
// console.log(multiplication(a, b));

// Divisão:
// let a = 5;
// let b = 10;
// function division(a, b) {
//   return a / b;
// };
// console.log(division(a, b))

// Módulo:
// let a = 5;
// let b = 10;
// function modul(a, b) {
//   return a % b;
// };
// console.log(modul(a, b))


//EXERCÌCIOS DO BLOCO 4 - PARTE 1 - OBJETOS E FOR/IN
// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// 1- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// console.log('Bem vinda ' + info.personagem)

// 2- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim'
// console.log(info)

// 3- Faça um for/in que mostre todas as chaves do objeto.
// for (let keys in info) {
//     console.log(keys)
// }

// 4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (let keys in info) {
//     console.log(info[keys])
// }

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
// }
// info2.recorrente = 'Sim'
// for (let key in info) {
//     for (let key in info2) {        
//     }
//     console.log(info[key] + ' e ' + info2[key])
// }

//EXERCÌCIOS DO BLOCO 4 - PARTE 2 - FUNÇÕES
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
// function palindrome(word) { //MODO 1 PARA RESOLVER ESSE EXERCÌCIO
//     for (let index in word) {
//         if (word[index] !== word[(word.length - 1) - index]) {
//             return false + '. Essa palavra não é um palíndromo.'
//         }
//     }
//     return true + '. Essa palavra é um palíndromo'
// }
// function verifyPalindrome(string) { //MODO 2 PARA RESOLVER ESSE EXERCÍCIO
//     let reverse = string.split('').reverse().join('')
//     if (string === reverse) {
//         return true + '. Essa palavra é um palíndromo'
//     } else {
//         returnfalse + '. Essa palavra não é um palíndromo'
//     }
// }
// console.log(palindrome('cabo'))
// console.log(verifyPalindrome('arara'))
