import PizzaCommon from './PizzaCommon';
import PizzaVegeratian from './PizzaVegetarian';
import PizzaSugar from './PizzaSugar';

const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6
};

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 8,
};

const peperoni: PizzaCommon = {
  flavor: 'Peperoni',
  slices: 4,
};

const marguerita: PizzaVegeratian = {
  flavor: 'Marguerita',
  slices: 6,
};

const cogumelo: PizzaVegeratian = {
  flavor: 'Cogumelo',
  slices: 4,
};

const goiabadaComQueijo: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};

console.log(calabresa);
console.log(frango);
console.log(peperoni);
console.log(marguerita);
console.log(cogumelo);
console.log(goiabadaComQueijo);