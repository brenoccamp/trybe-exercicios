abstract class Character {
  constructor(public name: string) { }

  abstract talk(): void;

  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log(`${this.name} is saying hello!`);
  }

  specialMove(): void {
    console.log(`${this.name} is moving so fast as speed light!`);
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log(`${this.name} is saying hello!`);
  }

  specialMove(): void {
    console.log(`${this.name} is moving like a storm!`);
  }
}

function myFunc(character: Character): void {
  character.talk();
  character.specialMove();
}

const knight = new MeleeCharacter('Knight\'Poderoso');
const paladin = new LongRangeCharacter('Coringa Paladino');

myFunc(knight);
myFunc(paladin);