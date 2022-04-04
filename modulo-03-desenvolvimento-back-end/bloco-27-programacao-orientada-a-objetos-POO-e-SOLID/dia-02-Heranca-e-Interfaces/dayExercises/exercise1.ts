class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.isValidName(name) ? this._name = name : this._name = 'Arg "name" must have at least 3 characters';
    this.isValidateBirthDate(birthDate) ? this._birthDate = birthDate : this._birthDate = new Date();
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(newName: string) {
    this.isValidName(newName) ? this._name = newName : console.error('Arg "name" must have at least 3 characters');
  }

  set birthDate(newBirthDate: Date) {
    this.isValidateBirthDate(newBirthDate) ? this._birthDate = newBirthDate : this._birthDate = new Date();
  }

  private isValidName(name: string): boolean {
    if (name.length >= 3) return true;
    return false;
  }

  private isValidateBirthDate(birthDate: Date): boolean {
    const dateNow = new Date();
    const yearsOld = dateNow.getFullYear() - birthDate.getFullYear();
    // if (dateNow.getTime() < birthDate.getTime()) return false;
    if (yearsOld > 120 || yearsOld < 0) return false;

    return true;
  }

  public toString(): string {
    return `${this.name}, ${this._birthDate}`;
  }
}

const date1 = new Date();
date1.setFullYear(1900);
console.log(date1);
const person1 = new Person('Jon Doe', date1);
console.log(`${person1}`);