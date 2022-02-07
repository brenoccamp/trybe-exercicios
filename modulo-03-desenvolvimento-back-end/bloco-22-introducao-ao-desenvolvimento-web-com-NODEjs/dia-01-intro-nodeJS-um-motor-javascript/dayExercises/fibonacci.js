const readline = require('readline-sync');

function calcFibonacci(n) {
  const fibonacciSequence = [0, 1, 1];

  if (n === 0) return console.log(0);
  if (n === 1) return console.log(1);
  if (n === 2) return console.log(1);

  while (fibonacciSequence.length <= n) {
    const lastNumber = fibonacciSequence[fibonacciSequence.length - 1];
    const antepenultimate = fibonacciSequence[fibonacciSequence.length - 2];

    const nextNumber = lastNumber + antepenultimate;
    fibonacciSequence.push(nextNumber);
  }

  console.log(`The sequence until ${n} is: ${fibonacciSequence}`);
  console.log(`The position ${n} of fibonacci sequence is: ${fibonacciSequence[fibonacciSequence.length -1]}`);
}

const callsCalcFibonacci = () => {
  const n = readline.questionInt('Type an integer not negative: ');

  if (n <= 0) return console.log('Next time, type a number bigger than 0! Bye!');

  calcFibonacci(n);
}

callsCalcFibonacci();
