//Exercício 1
function changeText () {
    document.getElementsByTagName('p')[0].innerHTML = 'Trabalhando em uma empresa internacional e morando no brasil.'
}
changeText ();

//Exercício 2
function changeBackgroundColor() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
}
changeBackgroundColor ();

//Exercício 3
function changeInternalColor () {
    document.getElementsByTagName('section')[0].style.backgroundColor = 'white';
}
changeInternalColor ();

//Exercício 4
function toFixText () {
    document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';
}
toFixText ();

//Exercício 5
function toUpperText () {
   let upperText = document.getElementsByTagName('p')[0];
   upperText.innerHTML = upperText.innerHTML.toUpperCase(); 
}
toUpperText ();

//Exercício 6
function showAllTagsP () {
    let showAllP = document.getElementsByTagName('p');
    for (let i = 0; i < showAllP.length; i++) {
        console.log(showAllP[i].innerHTML);        
    }
}
showAllTagsP ();