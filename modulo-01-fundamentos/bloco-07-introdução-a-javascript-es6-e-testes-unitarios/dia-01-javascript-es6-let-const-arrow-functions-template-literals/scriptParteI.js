// Parte I
// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)!';
//     ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
//     console.log(`${ifScope} Ótimo, fui utilizada no escopo!`);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// const sortOddsAndEvens = (array) => {
//   const sortArray = array.sort((a, b) => a - b);
//   return sortArray;
// }
// const sortedArray = sortOddsAndEvens(oddsAndEvens);
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
// const factorial = number => {
//   let numberFactored = 1;
//   for (let index = 2; index <= number; index += 1) {
//     numberFactored *= index;
//   }
//   return numberFactored;
// }
// console.log(factorial(6));
// console.log(factorial(5))
// const factorialWithTernary = number => number > 1 ? number * factorialWithTernary(number - 1) : 1;
// console.log(factorial(5))


// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
// RESOLUÇÃO EM UMA LINHA.
// const longestWord = string => string.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]; 

// const longestWord = phrase => {
//   let splitedPhrase = phrase.split(' ');
//   let wordLength = 0;
//   let biggestWord = '';
//   for (const word of splitedPhrase) {
//     if (word.length > wordLength) {
//       wordLength = word.length;
//       biggestWord = word;
//     }
//   }
//   return biggestWord;
// }
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// 3 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// const getClick = document.getElementById('clicks');
// let clickCount = 0;
// const getButton = document.getElementById('botao').addEventListener('click', () => getClick.innerHTML = clickCount += 1);


// 4 - Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

// const array = ['JS', 'CSS', 'HTML5'];
// function buildSkillsPhrase (paramOne) {
//   const fun1 = paramInner => (
//     `Tryber ${paramInner} aqui!
//     Tudo bem?`
//   );
//   let result = `${fun1(paramOne)}
//   Minhas principais habilidades são:`;
//   array.forEach((skill, index) => 
//   result = `${result} - ${[skill]}`);
//   result = `${result}
//   #gotrybe`;
//   return result;
// }
// console.log(buildSkillsPhrase('Lucas'));