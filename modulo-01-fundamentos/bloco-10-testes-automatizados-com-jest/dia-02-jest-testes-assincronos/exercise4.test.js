// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
const reposURL = 'https://api.github.com/orgs/tryber/repos';
const reposTodoList = 'sd-01-week4-5-project-todo-list';
const reposMemeGenerator = 'sd-01-week4-5-project-meme-generator';

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// TESTE PARA VERIFICAR O RETORNO DE getRepos UTILIZANDO SINTAXE ASSYNC/AWAIT
describe('Testa retorno de getRepos utilizando async/await', () => {
  it('getRepos retorna uma lista com os repositórios project-todo-list e project-meme-generator', async () => {
    const listRepos = await getRepos(reposURL);
    expect(listRepos).toContain(reposTodoList);
    expect(listRepos).toContain(reposMemeGenerator);
  });
});