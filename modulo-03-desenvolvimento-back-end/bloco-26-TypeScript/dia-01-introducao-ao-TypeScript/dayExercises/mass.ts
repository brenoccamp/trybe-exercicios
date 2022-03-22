const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade váida!`);
}

function convert(value: number, baseUnity: string, conversionUnity: string): number {
  if (!units.includes(baseUnity)) makeError(baseUnity);
  if (!units.includes(conversionUnity)) makeError(conversionUnity);

  const baseIndex = units.indexOf(baseUnity);
  const conversionIndex = units.indexOf(conversionUnity);
  const expoent = (conversionIndex - baseIndex);

  return value * Math.pow(10, expoent);
}