const readline = require('readline-sync');

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter massa', script: './mass' },
  { name: 'Converter capacidade', script: './capacity' },
  { name: 'Converter área', script: './area' },
  { name: 'Converter volume', script: './volume' },
];

const scriptNames = scripts.map((item) => item.name);

const choice = readline.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversão de unidade', { cancel: 'SAIR' });

if (choice === -1) console.log('Saindo!');
else require(scripts[choice].script);
