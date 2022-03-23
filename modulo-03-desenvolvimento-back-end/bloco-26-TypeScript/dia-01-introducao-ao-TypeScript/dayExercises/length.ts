const readlineSync = require('readline-sync');

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function makeError(unity: string): string {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}

function convert(value: number, baseUnity: string, conversionUnity: string): number {
  if (!units.includes(baseUnity)) makeError(baseUnity);
  if (!units.includes(conversionUnity)) makeError(conversionUnity);

  const baseIndex = units.indexOf(baseUnity);
  const conversionIndex = units.indexOf(conversionUnity);
  const expoent = (conversionIndex - baseIndex);

  return value * Math.pow(10, expoent);
}

function exec(): string {
  const value = readlineSync.questionFloat('Type a value to convert: ');
  const baseUnity = readlineSync.question('Type the base unity: ');
  const conversionUnity = readlineSync.question('Type the conversion unity: ');

  const convertedValue = convert(value, baseUnity, conversionUnity);

  return `${value}${baseUnity} é igual a ${convertedValue}${conversionUnity}`;
}

console.log(exec());
