const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo3.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => console.log(`Conteúdo do arquivo: ${data}`))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });
