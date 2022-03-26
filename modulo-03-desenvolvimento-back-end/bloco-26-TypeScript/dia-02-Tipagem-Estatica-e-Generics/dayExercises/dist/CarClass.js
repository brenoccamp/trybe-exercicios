"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // validateDoors(door: Doors): boolean|string {
    //   if (Object.values(Doors).includes(door)) return true;
    //   throw new Error('Porta inválida');
    // }
    honk() {
        console.log('Buzinando: BIP BIP');
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta ${door}.`);
    }
    turnOn() {
        console.log('Carro ligado.');
    }
    turnOff() {
        console.log('Carro desligado.');
    }
    speedUp() {
        console.log('Acelerando carro.');
    }
    speedDown() {
        console.log('Desacelerando carro.');
    }
    stop() {
        console.log('Carro parado.');
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
}
exports.default = Car;
