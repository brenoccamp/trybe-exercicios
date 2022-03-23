const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function makeError(unity: string) {
  throw new Error(`A Unidade ${unity} não é uma unidade válida!`);
}

function convert(value: number, baseUnity: string, conversionUnity: string): number {
  if (!units.includes(baseUnity)) makeError(baseUnity);
  if (!units.includes(conversionUnity)) makeError(conversionUnity);

  const baseIndex = units.indexOf(baseUnity);
  const conversionIndex = units.indexOf(conversionUnity);
  const expoent = (conversionIndex - baseIndex);

  return value * Math.pow(10, expoent);
}