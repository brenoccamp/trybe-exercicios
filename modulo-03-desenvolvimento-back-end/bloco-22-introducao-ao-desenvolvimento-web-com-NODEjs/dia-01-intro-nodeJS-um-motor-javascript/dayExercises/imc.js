const weight = 80;
const height = 175;

const calcImc = () => {
  console.log(`Your weight is ${weight} and your height is ${height}cm`);

  const imc = (weight / Math.pow(height/100, 2)).toFixed(2);

  console.log(`Your IMC: ${imc}`);
}

calcImc();