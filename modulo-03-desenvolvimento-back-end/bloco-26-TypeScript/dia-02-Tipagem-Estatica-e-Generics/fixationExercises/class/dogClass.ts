interface Dog {
  _breed: string;
  _name: string;
  _age: number;
}

class Dog {
  constructor(breed: string, name: string, age: number) {
    this._breed = breed;
    this._name = name;
    this._age = age;
  }

  latir(latido: string) {
    return `Cachorro ${this._name} está latindo: ${latido}`;
  }
}