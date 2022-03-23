"use strict";
var _a, _b;
exports.__esModule = true;
var process_1 = require("process");
var readline = require('readline-sync');
var Months_1 = require("./Months");
var Seasons_1 = require("./Seasons");
var monthsNames = Object.values(Months_1["default"]).map(function (item) { return item; });
var choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano', { cancel: 'SAIR' });
if (choiceMonth === -1) {
    console.log('Saindo');
    (0, process_1.exit)();
}
var seasonsSouth = (_a = {},
    _a[Seasons_1["default"].Fall] = [Months_1["default"].March, Months_1["default"].April, Months_1["default"].May, Months_1["default"].June],
    _a[Seasons_1["default"].Winter] = [Months_1["default"].June, Months_1["default"].July, Months_1["default"].August, Months_1["default"].September],
    _a[Seasons_1["default"].Summer] = [Months_1["default"].September, Months_1["default"].October, Months_1["default"].November, Months_1["default"].December],
    _a[Seasons_1["default"].Spring] = [Months_1["default"].December, Months_1["default"].January, Months_1["default"].February, Months_1["default"].March],
    _a);
var seasonsNorth = (_b = {},
    _b[Seasons_1["default"].Fall] = seasonsSouth[Seasons_1["default"].Spring],
    _b[Seasons_1["default"].Winter] = seasonsSouth[Seasons_1["default"].Summer],
    _b[Seasons_1["default"].Summer] = seasonsSouth[Seasons_1["default"].Winter],
    _b[Seasons_1["default"].Spring] = seasonsSouth[Seasons_1["default"].Fall],
    _b);
var hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth
};
var choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério', { cancel: 'SAIR' });
if (choiceHemisphere === -1) {
    console.log('Saindo');
    (0, process_1.exit)();
}
var month = Object.values(Months_1["default"])[choiceMonth];
var hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map(function (season) {
    var seasons = season[0];
    var months = season[1];
    if (months.includes(month))
        console.log(seasons);
});
