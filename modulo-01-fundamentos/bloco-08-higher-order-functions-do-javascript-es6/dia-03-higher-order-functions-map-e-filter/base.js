// Instruções para realização dos exercícios
// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.
// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.
// Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js , e assim por diante. Em cada exercício existe uma ou mais chamadas de funções do módulo assert . Estas funções checarão automaticamente se seu código retorna o resultado esperado.
// Sua solução só será considerada correta se todos os asserts do arquivo forem executados sem erros. No Visual Studio Code , você pode executar o código do exemplo clicando com o botão direito e escolhando a opção Run Code .
// Quando todos os asserts passam, isto é, nenhum deles encontra um resultado diferente esperado, nada de diferente do normal é reportado:
// Quando algum assert falha, é exibido, entre outras coisas, a linha onde o erro aconteceu e sua causa: Atente para a linha que diz por que a execução falhou: AssertionError [ERR_ASSERTION]: 'bar' == 'baz' . Isso significa que o resultado da função foo ( bar ) é diferente do esperado ( baz ).

// Utilize o array abaixo para realizar os exercícios.
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
module.exports = books
