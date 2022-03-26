import Pizza from './Pizza';
import { Comum } from './PizzaFlavorsTypes';

interface PizzaCommon extends Pizza {
  flavor: Comum
}

export default PizzaCommon;