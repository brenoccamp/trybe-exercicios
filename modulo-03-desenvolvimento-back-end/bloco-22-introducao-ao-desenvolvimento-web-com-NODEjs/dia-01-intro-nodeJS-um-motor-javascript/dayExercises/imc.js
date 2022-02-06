const readline = require('readline-sync');
const weight = readline.questionFloat('May I have your weight?');
const height = readline.questionInt('May I have your height?');

const calcImc = () => {
  console.log(`Your weight is ${weight}kg and your height is ${height}cm`);

  const imc = (weight / Math.pow(height/100, 2)).toFixed(2);

  console.log(`Your IMC is: ${imc}`);

  if(imc <= 18.5) {
    return console.log('Category: Under weight!');
  }
  if (imc <= 24.9) {
    return console.log('Category: Normal weight!');
    }
  if (imc <= 29.9) {
    return console.log('Category: Overweight!');
  }
  if (imc <= 34.9) {
    return console.log('Category: Obesity grade I!');
  }
  if (imc <= 39.9) {
    return console.log('Category: Obesity grade II!');
  }
  if (imc >= 40) {
    return console.log('Category: Obesity grade III and IV!');
  }
}

calcImc();

module.exports = calcImc;
