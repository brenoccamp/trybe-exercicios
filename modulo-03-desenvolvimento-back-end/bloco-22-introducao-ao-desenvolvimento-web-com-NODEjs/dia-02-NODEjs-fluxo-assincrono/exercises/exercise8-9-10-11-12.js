function fizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) return resolve('FizzBuzz');

  });
}