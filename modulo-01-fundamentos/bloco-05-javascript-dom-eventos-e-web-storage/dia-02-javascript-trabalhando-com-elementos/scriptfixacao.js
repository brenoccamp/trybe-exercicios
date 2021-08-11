// PARTE I - BUSCANDO ELEMENTOS
// 1- Acesse o elemento elementoOndeVoceEsta .
// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4- Acesse o primeiroFilho a partir de pai .
// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// 8- Agora acesse o terceiroFilho a partir de pai.


//1
document.getElementById('elementoOndeVoceEsta').style.color = 'blue';

//2
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'green';

//3
document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Texto Padrão do Site';

//4
document.getElementById('pai').firstElementChild;

//5
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

//6
document.getElementById('elementoOndeVoceEsta').nextSibling

//7
document.getElementById('elementoOndeVoceEsta').nextElementSibling

//8
document.getElementById('pai').childElementCount[5];

//PARTE II - CRIANDO ELEMENTOS
// 1- Crie um irmão para elementoOndeVoceEsta .
// 2- Crie um filho para elementoOndeVoceEsta .
// 3- Crie um filho para primeiroFilhoDoFilho .
// 4- A partir desse filho criado, acesse terceiroFilho .

//1
const addNewSection = document.createElement('section');
addNewSection.id = 'quintoFilho'
pai.appendChild(addNewSection);

//2
const newSon = document.createElement('section');
newSon.id = 'filhoDoElementoOndeEstou';
elementoOndeVoceEsta.appendChild(newSon);

//3
const primeiroFilhoDoNeto = document.createElement('section');
primeiroFilhoDoNeto.id = 'bisneto'
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoNeto);

//4
const bisneto = primeiroFilhoDoNeto;
bisneto.parentElement.parentElement.nextElementSibling;

// PARTE III - REMOVENDO ELEMENTOS
// 1- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

// 1
const pai1 = document.getElementById('pai');
for (let index = pai1.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai1.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

const removeNetosDePai = document.getElementById('elementoOndeVoceEsta');
for (let index = 0; index < removeNetosDePai.childNodes.length; index += 1) {
    const currentChildren = removeNetosDePai.childNodes[index];
    if (currentChildren.id === 'segundoEUltimoFilhoDoFilho' || currentChildren.id === 'filhoDoElementoOndeEstou') {
        currentChildren.remove();
    }
}