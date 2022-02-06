const readline = require('readline-sync');


function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function calcFactorial() {
  const n = readline.questionInt('Add an integer to get him factorial:');

  if (n <= 0) {
    return console.log('Type a number bigger than 0!')
  }

  console.log(`n: ${n}`);

  const result = factorial(n);

  console.log(`Result of factoring: ${result}`);
}

calcFactorial();
