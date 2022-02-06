const readline = require('readline-sync');
const weight = readline.questionInt('May I have your weight?');
const height = readline.questionInt('May I have your height?');

const calcImc = () => {
  console.log(`Your weight is ${weight}kg and your height is ${height}cm`);

  const imc = (weight / Math.pow(height/100, 2)).toFixed(2);

  console.log(`Your IMC: ${imc}`);
}

calcImc();