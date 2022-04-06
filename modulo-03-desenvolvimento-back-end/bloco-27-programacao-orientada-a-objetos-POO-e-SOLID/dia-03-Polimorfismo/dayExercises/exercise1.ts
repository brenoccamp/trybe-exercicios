export default abstract class Person {
  protected _name: string;
  protected _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  abstract get name(): string;
  abstract get age(): number;

  abstract set name(newName: string);
  abstract set age(newAge: number);
}
