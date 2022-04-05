export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length < 3) throw new Error('Name must have at least 3 characters');
    this._name = newName;
  }
}

const matematica = new Subject('Matemática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

// console.log(matematica);
// console.log(historia);
// console.log(filosofia);