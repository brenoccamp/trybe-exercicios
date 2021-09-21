// Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!.Como ? Vamos praticar!
// Primeiro, veja o manual da API do site icanhazdadjoke.com.Ele esclarece como fazer as requisições ao serviço de piadas.Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
// Para começar, vamos fazer uma requisição via browser.Visite o site icanhazdadjoke.com, e perceba que ele devolve uma página HTML com uma piada aleatória.
// Em seguida, no terminal, vamos fazer a requisição: curl - H "Accept: text/html" "https://icanhazdadjoke.com/".Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
// Para a próxima requisição, vamos usar o comando: curl - H "Accept: text/plain" "https://icanhazdadjoke.com/".Veja que agora recebemos apenas a piada aleatória em formato texto.
// Por fim, faça a requisição: curl - H "Accept: application/json" "https://icanhazdadjoke.com/".Agora a API retorna um objeto no formato JSON.Perceba que, dependendo do que passamos na chave Accept: no header, definido por - H no comando, o serviço nos retorna uma resposta diferente.
// Utilize o HTML e o js a seguir como base:
// apiScript.js
// Para rodar nosso código direto no Node e não no browser, precisamos instalar o node-fetch . Execute o comando abaixo, no terminal, caso você ainda não tenha o package.json :
// npm init -y
// depois, instale o node-fetch :
// npm i node-fetch@^2
// Note que foi utilizado o @^2 ao final do nome do pacote para especificar que deve ser instalado a versão mais atual, mas que não seja maior que a 2 . Essa especificação ocorre visto que a versão 3 do node-fetch foi alterada para ser usada através de módulos do JS, podendo ser importada apenas através do import e não mais do require .

// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = obj => {
  // console.log(obj)
  const getH2 = document.getElementById("jokeContainer");
  getH2.innerHTML = obj.joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObj)
    .then(response => response.json())
      // .then(r => console.log(r))
        .then(data => appendJoke(data))
};
// fetchJoke()
window.onload = () => fetchJoke();


// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// 1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// 2. Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers