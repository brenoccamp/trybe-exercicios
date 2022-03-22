var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function makeError(unity) {
    throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
}
function convert(value, baseUnity, conversionUnity) {
    if (!units.includes(baseUnity))
        makeError(baseUnity);
    if (!units.includes(conversionUnity))
        makeError(conversionUnity);
    var baseIndex = units.indexOf(baseUnity);
    var conversionIndex = units.indexOf(conversionUnity);
    var expoent = (conversionIndex - baseIndex);
    return value * Math.pow(10, expoent);
}
