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

  const baseUnity = readline.keyInSelect(units, 'Type the base unity: ', { cancel: 'SAIR' });
  if ((baseUnity) === -1) return console.log('Saindo!');

  const conversionUnity = readline.keyInSelect(units, 'Type the conversion unity: ', { cancel: 'SAIR' });
  if (conversionUnity === -1) return console.log('Saindo!');

  const convertedValue = convert(units, value, units[baseUnity], units[conversionUnity]);

  const message = `${value}${units[baseUnity]} é igual a ${convertedValue}${units[conversionUnity]}`;
  console.log(message);
}

export default {
  convert,
  exec,
};