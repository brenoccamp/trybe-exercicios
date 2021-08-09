//Exercício 1
function exercicio1 () {
    document.getElementsByTagName('p')[0].innerHTML = 'Trabalhando em uma empresa internacional e morando no brasil.'
}

//Exercício 2
function exercicio2 () {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
}

//Exercício 3
function exercicio3 () {
    document.getElementsByTagName('section')[0].style.backgroundColor = 'white';
}

//Exercício 4
function exercicio4 () {
    document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';
}

//Exercício 5
function exercicio5 () {
    document.getElementsByTagName('p')[0].style.textTransform = 'UpperCase';
}

function chamada () {
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
}

//Exercício 6
// console.log(document.getElementsByTagName('')[0].innerHTML)