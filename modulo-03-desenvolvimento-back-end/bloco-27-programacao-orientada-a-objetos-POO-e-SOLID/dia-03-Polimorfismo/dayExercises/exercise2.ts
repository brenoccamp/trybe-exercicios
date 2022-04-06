import Person from "./exercise1";

export default class Employee extends Person {
  constructor(
    name: string,
    age: number,
  ) {
    super(name, age);
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    console.log(this);
    return this._age;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set age(newAge: number) {
    this._age = newAge;
  }
}

const newEmp = new Employee('Breno', 29);
newEmp.age