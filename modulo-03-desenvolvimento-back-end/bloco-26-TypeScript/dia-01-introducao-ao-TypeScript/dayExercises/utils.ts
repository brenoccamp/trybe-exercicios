const readline = require('readline-sync');

function makeError(unity: string): string {
  throw new Error(`A unidade ${unity} não é uma unidade válida!`);
}

function convert(units: string[], value: number, baseUnity: string, conversionUnity: string): number {
  if (!units.includes(baseUnity)) makeError(baseUnity);
  if (!units.includes(conversionUnity)) makeError(conversionUnity);

  const baseIndex = units.indexOf(baseUnity);
  const conversionIndex = units.indexOf(conversionUnity);
  const expoent = (conversionIndex - baseIndex);

  return value * Math.pow(10, expoent);
}

function exec(units: string[]) {
  const value = readline.questionFloat('Type a value to convert: \n');

  const baseUnity = readline.question('Type the base unity: ', { cancel: 'EXIT' });
  if (Number(baseUnity) === -1) return console.log('Exiting');

  const conversionUnity = readline.question('Type the conversion unity: ', { cancel: 'EXIT' });
  if (Number(conversionUnity) === -1) return console.log('Exiting');

  const convertedValue = convert(units, value, baseUnity, conversionUnity);

  const message = `${value}${baseUnity} é igual a ${convertedValue}${conversionUnity}`;
  console.log(message);
}

export default {
  convert,
  exec,
};