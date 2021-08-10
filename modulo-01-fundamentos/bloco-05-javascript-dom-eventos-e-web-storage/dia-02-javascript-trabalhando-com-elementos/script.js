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
const addTagSection2 = document.createElement('section');
addTagSection2.className = 'left-content';
addTagMain.appendChild(addTagSection2);

//6
const addTagSection3 = document.createElement('section');
addTagSection3.className = 'right-content';
addTagMain.appendChild(addTagSection3);

//7
const addImg = document.createElement('img');
addImg.className = 'small-image';
addImg.src = 'https://picsum.photos/200';
addTagSection2.appendChild(addImg);

//8
const addElementUl = document.createElement('ul');
addTagSection3.appendChild(addElementUl);
const arrayNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < arrayNumbers.length; i++) {
    const addElementLi = document.createElement('li');
    addElementLi.innerHTML = arrayNumbers[i];;
    addElementUl.appendChild(addElementLi);
}
