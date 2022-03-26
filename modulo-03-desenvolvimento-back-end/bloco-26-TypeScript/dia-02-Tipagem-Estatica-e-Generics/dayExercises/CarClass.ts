import Colors from './Colors';
import Doors from './Doors';
import Directions from './Directions';

export default class Car {
  _make: string;
  _color: Colors;
  _doors: number;

  constructor(make: string, color: Colors, doors: number) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  // validateDoors(door: Doors): boolean|string {
  //   if (Object.values(Doors).includes(door)) return true;
  //   throw new Error('Porta inválida');
  // }

  honk(): void {
    console.log('Buzinando: BIP BIP');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta ${door}.`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta ${door}.`);
  }

  turnOn(): void {
    console.log('Carro ligado.');
  }

  turnOff(): void {
    console.log('Carro desligado.');
  }

  speedUp(): void {
    console.log('Acelerando carro.');
  }

  speedDown(): void {
    console.log('Desacelerando carro.');
  }

  stop(): void {
    console.log('Carro parado.');
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}.`);
  }
}