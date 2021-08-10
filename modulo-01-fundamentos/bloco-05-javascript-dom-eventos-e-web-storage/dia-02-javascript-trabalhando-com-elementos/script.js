//1
const addTagH1 = document.createElement('h1');
addTagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(addTagH1);

//2
const addTagMain = document.createElement('main');
addTagMain.className = 'main-content';
document.body.appendChild(addTagMain);

//3
const addTagSection = document.createElement('section');
addTagSection.className = 'center-content';
addTagMain.appendChild(addTagSection);

//4
const addTagP = document.createElement('p');
addTagP.innerText = 'Texto da Tag P';
addTagSection.appendChild(addTagP);

//5
