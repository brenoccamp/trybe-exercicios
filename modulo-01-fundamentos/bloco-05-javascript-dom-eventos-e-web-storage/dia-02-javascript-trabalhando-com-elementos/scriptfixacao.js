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