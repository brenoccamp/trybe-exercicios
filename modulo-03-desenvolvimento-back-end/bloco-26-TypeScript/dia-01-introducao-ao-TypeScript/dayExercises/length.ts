const readlineSync = require('readline-sync');
import utils from './utils';

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value: number, baseUnity: string, conversionUnity: string): number {

}

function exec(): string {
  const value = readlineSync.questionFloat('Type a value to convert: ');
  const baseUnity = readlineSync.question('Type the base unity: ');
  const conversionUnity = readlineSync.question('Type the conversion unity: ');

  const convertedValue = convert(value, baseUnity, conversionUnity);

  return `${value}${baseUnity} é igual a ${convertedValue}${conversionUnity}`;
}

console.log(exec());
