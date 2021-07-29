// Exercícios Bloco 4.1
// let a = 60; //Variável usada para todos os exercicios
// let b = 60; //Variável usada para todos os exercicios
// let c = 60; //Variável usada para todos os exercicios
// 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
// if (a > b) {
//     console.log('"a" é maior que "b".')
// } else {
//     console.log('"b" é maior que "a".')
// };

// 3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
// if (a > b && a > c) {
//     console.log('"a" é maior do que "b" e "c".')
// } else if (b > a && b > c) {
//     console.log('"b" é maior do que "a" e "c".')
// } else {
//     console.log('"c" é maior do que "a" e "b".')
// }

// 4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// if (a > 0) {
//     console.log('"a" possui valor positivo.')
// } else if (a < 0) {
//     console.log('"a" possui valor negativo.')
// } else {
//     console.log('"a" é igual a 0.')
// }

// 5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// let sumOfAngles = a+b+c; 
// let allAnglesPositives = a > 0 && b > 0 && c > 0;
// if (allAnglesPositives) {
//     if (sumOfAngles === 180) {
//     console.log(true);
//     } else {
//         console.log(false)
//     };
// } else {
//     console.log('Ângulo inválido.')
// }

// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// let peca = 10;
// peca.toLowerCase();
// if (peca == 'bispo') {
//     console.log('Movimenta nas diagonais.')
// } else if (peca.toLowerCase() == 'bispo') {
//     console.log('Movimenta nas diagonais.')
// } else {
//     console.log('Erro.')
// }

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// let nota = 90;
// let a = nota >= 90 || nota <= 100;
// let b = nota >= 80 || nota <= 90;
// let c = nota >= 70 || nota <= 80;
// let d = nota >= 60 || nota <= 70;
// let e = nota >= 50 || nota <= 60;
// let f = nota < 50 || nota >= 0;
// if (nota = a) {
//     console.log('Nota A')
// } else if (nota = b) {
//     console.log('Nota B')
// } else if (nota = c) {
//     console.log('Nota C')
// } else if (nota = d) {
//     console.log('Nota D')
// } else if (nota = e) {
//     console.log('Nota E')
// } else if (nota = f) {
//     console.log('Nota F')
// } else {
//     console.log('ERRO: nota inválida.')
// }

// 8-Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
// if (a%2 == 0 || b%2 == 0 || c%2 == 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// 9-Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// // Bonus: use somente um if.
// if (a%2 > 0 || b%2 > 0 || c%2 > 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// 10-Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto).
// let custoProduto = 100;
// let venda = 150;
// let custoTotal = custoProduto + (custoProduto * 0.2);
// let lucro = (venda - custoTotal);
// let lucroTotal = lucro * 1000;
// if (custoProduto < 0 || venda < 0) {
//     console.log('Erro! Valor inválido.');
// } else {
//     console.log('O lucro da empresa foi: ' + lucroTotal + 'R$');
// }

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

let salarioBruto = 1500;
let salarioDeduzidoINSS;
let aliquotaINSS1 = 0.92;
let aliquotaINSS2 = 0.91;
let aliquotaINSS3 = 0.89;
let aliquotaINSS4 = 570.88;
// let salarioDeduzidoInss = salarioBruto - (salarioBruto * );
// let deducaoIr = (salarioDeduzidoInss * 0.15) - 354.80;
// let salarioLiquido = salarioDeduzidoInss - deducaoIr;
// console.log(salarioLiquido);
if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
    salarioBruto * aliquotaINSS1;
    salarioBruto >> salarioDeduzidoINSS;
    console.log(salarioDeduzidoINSS)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBruto * aliquotaINSS2;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBruto * aliquotaINSS3;
} else if (salarioBruto > 5189.52) {
    salarioBruto * aliquotaINSS4;
};
    
