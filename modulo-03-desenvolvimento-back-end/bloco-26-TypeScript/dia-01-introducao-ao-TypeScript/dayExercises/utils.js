"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
function makeError(unity) {
    throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida!"));
}
function convert(units, value, baseUnity, conversionUnity) {
    if (!units.includes(baseUnity))
        makeError(baseUnity);
    if (!units.includes(conversionUnity))
        makeError(conversionUnity);
    var baseIndex = units.indexOf(baseUnity);
    var conversionIndex = units.indexOf(conversionUnity);
    var expoent = (conversionIndex - baseIndex);
    return value * Math.pow(10, expoent);
}
function exec(units) {
    var value = readline.questionFloat('Type a value to convert: \n');
    var baseUnity = readline.keyInSelect(units, 'Type the base unity: ', { cancel: 'SAIR' });
    if ((baseUnity) === -1)
        return console.log('Saindo!');
    var conversionUnity = readline.keyInSelect(units, 'Type the conversion unity: ', { cancel: 'SAIR' });
    if (conversionUnity === -1)
        return console.log('Saindo!');
    var convertedValue = convert(units, value, units[baseUnity], units[conversionUnity]);
    var message = "".concat(value).concat(units[baseUnity], " \u00E9 igual a ").concat(convertedValue).concat(units[conversionUnity]);
    console.log(message);
}
exports["default"] = {
    convert: convert,
    exec: exec
};
