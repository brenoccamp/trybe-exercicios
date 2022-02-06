const readline = require('readline-sync');

const scripts = [
  {name: 'Calculate BMI', script: './imc.js'},
  {name: 'Calcute average speed', script: './velocidade.js'},
  {name: 'Guessing game', script: './sorteio.js'},
  {name: 'Calculate factorial', script: './fatorial.js'}
];

let message = scripts.map((script, index) => `${index + 1} - ${script.name}`);

message.unshift('Choose a number to execute corresponding script:');

message = message.join('\n');

const scriptNumber = readline.questionInt(message) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Invalid Number. Bye!');

require(script.script);
