import { exit } from 'process';
const readline = require('readline-sync');
import Months from './Months';
import Seasons from './Seasons';

const monthsNames = Object.values(Months).map((item) => item);

const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano', { cancel: 'SAIR' });

if (choiceMonth === -1) {
  console.log('Saindo');
  exit();
}

const seasonsSouth = {
  [Seasons.Fall]: [Months.March, Months.April, Months.May, Months.June],
  [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
  [Seasons.Summer]: [Months.September, Months.October, Months.November, Months.December],
  [Seasons.Spring]: [Months.December, Months.January, Months.February, Months.March],
};

const seasonsNorth = {
  [Seasons.Fall]: seasonsSouth[Seasons.Spring],
  [Seasons.Winter]: seasonsSouth[Seasons.Summer],
  [Seasons.Summer]: seasonsSouth[Seasons.Winter],
  [Seasons.Spring]: seasonsSouth[Seasons.Fall],
};

const hemispheres = {
  'North': seasonsNorth,
  'South': seasonsSouth,
};

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério', { cancel: 'SAIR' });

if (choiceHemisphere === -1) {
  console.log('Saindo');
  exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((season) => {
  const seasons = season[0];
  const months = season[1];

  if (months.includes(month)) console.log(seasons);
});