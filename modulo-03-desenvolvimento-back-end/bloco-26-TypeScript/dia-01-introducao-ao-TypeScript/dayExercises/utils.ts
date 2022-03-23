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

export default {
  convert,
};