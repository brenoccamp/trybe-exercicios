import Pizza from './Pizza';
import { Vegeratiana } from './PizzaFlavorsTypes';

interface PizzaVegeratian extends Pizza {
  flavor: Vegeratiana
}

export default PizzaVegeratian;