export default abstract class Person {
  private _name: string;
  private _age: number;
  static personPopulation: number = 0;

  constructor(name: string, age: number) {
    Person.incrementPopulation();

    if (name.length <= 3) {
      throw new Error('Name must be longer than 3 characters.');
    } else this._name = name;
    if (age > 110) {
      throw new Error('Age must be smaller than 110 years old.');
    } else this._age = age;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length <= 3) throw new Error('Name must be longer than 3 characters.');
    this._name = newName;
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge > 110) throw new Error('Age must be smaller than 110 years old.');
    this._age = newAge;
  }

  private static incrementPopulation(): void {
    Person.personPopulation += 1;
  }
}
