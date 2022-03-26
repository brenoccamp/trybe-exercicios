import Pizza from './Pizza';
import { Doce } from './PizzaFlavorsTypes';

interface PizzaSugar extends Pizza {
  flavor: Doce,
  slices: 4,
};

export default PizzaSugar;