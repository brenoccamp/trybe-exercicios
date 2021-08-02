// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
// console.log(tasksList.length);


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);

// let searchForLastTask = tasksList [tasksList.length - 1]
// console.log(searchForLastTask); 
// tasksList.push('Fazer exercícios da Trybe'); //Adiciona mais uma tarefa(task) ao array
// console.log(tasksList);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe'];
// tasksList.pop(); //Remove a última tarefa
// console.log(tasksList);

// [ 'Tomar café', 'Reunião', 'Brincar com o cachorro'];
// console.log(tasksList.indexOf('Fazer exercícios da Trybe'))

// Exercícios para fixar:
// Exercício-1 Obtenha o valor "Serviços" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];
// console.log(menuServices);

// Exercício-2 Procure o índice do valor "Portfólio" do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// Exercício-3 Adicione o valor "Contato" no final do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');
// console.log(menu);


//Exercícios de fixação do bloco4.2 - For
//Exercício 1- Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index])
// };


// Exercícios - Array e loop For
// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// Primeiro passo: percorrer todo o array;
// Segundo: guardar cada posição percorrida em uma nova variavel;
// Terceiro: incrementar cada execução na variavel que esta guardando os valores de cada indice.
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
//     console.log(sum)
// }
// console.log('Total: ', sum);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Primeiro passo: percorrer o array;
// Segudo passo: guardar cada posição percorrida em uma nova variavel;
// Terceiro passo: Fazer a incrementação da nova posição (indice) dentro do container que esta guardando os valores de cada indice, a cada execução.
// Quarto passo: Pegar o total da soma dos valores dentro de cada índice e dividir pelo numero total de índices. Isso trará a média.
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// } 
// console.log('Média: ', sum/numbers.length);

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// Primeiro passo: Percorrer cada indice do array;
// Segundo passo: incrementar em uma nova variavel o valor de cada indice a cada execução.
// Terceiro passo: Tirar a média, dividindo a variavel que contem o valor da soma total dos indices pelo numero de indices existentes no array;
// Quarto passo: Criar uma estrutura de if/else para dizer se a média é maior ou menor do que 20.
// let sum = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];    
// }
// let media = (sum / numbers.length);
// console.log('Média da soma dos valores de cada indice: ', media);
// if (media > 20) {
//     console.log('Valor maior que 20!')
// } else {
//     console.log('Valor menor ou igual a 20!')
// }

// 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Primeiro passo: Percorrer cada posição do array;
// // Segundo passo: comparar a posição atual com a anterior, caso seja maior, colocá-la dentro de uma nova variavel e descartar a antiga.
// let higherNumber = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (higherNumber < numbers[index]) {
//         higherNumber = numbers[index]
//     }
// }
// console.log(higherNumber)

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Primeiro passo: Percorrer cada posição do array;
// Segundo passo: Caso o indice contenham um valor ímpar, adicioná-lo dentro de uma nova variavel ou array.
// Terceiro passo: Contar quantos valores foram adicionados ao array com os numeros ímpares.
// let odds = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if ((numbers[index] % 2) !== 0) {
//         odds += 1;
//     }
// }
// if (odds === 0) {
//     console.log('Nenhum valor ímpar encontrado.')
// } else {
//     console.log('Total de números ímpares: ', odds);
// }

// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// Primeiro passo: Definir uma variável que irá receber o valor do menor número;
// Segundo passo: Percorrer cada posição do array;
// Terceiro passo: Comparar o indice atual com a posição anterior do array e definir se o valor é menor;
// Quarto passo: Caso seja menor, adicioná-lo no lugar do valor anterior;
// let smallestNumber = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < smallestNumber) {
//         smallestNumber = numbers[index];
//     }
// }
// console.log(smallestNumber);

// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// Primeiro passo: Criar um array para receber cada execução do loop;
// Segundo passo: Criar o loop for para ir até 25;
// Terceiro passo: Adicionar cada execução do loop para o array;
// Quarto passo: Imprimir o resultado;
// let array25 = [];
// for (let index = 1; index <= 25; index += 1) {
//     array25.push(index);
// }
// console.log(array25);

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// Primeiro passo: Criar o array do exercicio anterior novamente.
// Segundo passo: Usar uma estrutura para repetir cada elemento do array por 2. Usaremos o for/of
// Terceiro passo: Imprimir cada divisão;
// let array25 = [];
// for (let index = 1; index <= 25; index += 1) {
//     array25.push(index);
// }
// for (let index = 0; index < array25.length; index += 1) {
// console.log(array25[index]/2);
// }

// Bônus 1- for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }   ----> O CÓDIGO ACIMA É UMA ESTRUTURA DE ITERAÇÃO DE ARRAY, ONDE ELE PEGA 2 POSIÇÕES DE UM ARRAY DE CADA VEZ E COMPARA AS DUAS PARA VER QUAL É MAIOR, SE INDEX FOR MAIOR QUE SECONDINDEX, ELE INVERTE AS POSIÇÕES, CADA RODADA COMPLETA PELO ARRAY É CHAMADO DE UMA ITERAÇÃO.

// EXERCÌCIO BONUS 1- Ordene o array numbers em ordem crescente e imprima seus valores;
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers)

// EXERCÍCIO BONUS 2- Ordene o array numbers em ordem decrescente e imprima seus valores;
// for (index = 1; index < numbers.length; index += 1) {
//     for (secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[secondIndex] < numbers[index]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers)

// EXERCÍCIO BONUS 3- Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
// Primeiro passo: Declarar newArray que receberá os valores das multiplicações;
// Segundo passo: criar a estrutura de repetição que percorrerá as posições do array numbres;
// Terceiro passo: Fazer a multiplicação de index+1 pelo numbers[index];
// Quarto passo: Adicionar o resultado da multiplicação no novo array;
// Quinto passo: Quando index+1 for maior do que numbers.length, multiplicar numbers[index] por 2.
// // Sexto passo: Imprimir o resultado;
// let newArray = [];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (index + 1 < numbers.length) {
//         newArray.push(numbers[index] * numbers[index + 1]);
//     } else {
//         newArray.push(numbers[index] * 2);
//     }
// }
// console.log(newArray);