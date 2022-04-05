import Person from './exercise1';
import Employee from './exercise3';
import Subject from './exercise4';
import { v4 as uuidv4 } from 'uuid';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(newSubject: Subject) {
    this._subject = newSubject;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(newRegistration: string) {
    if (newRegistration.length < 16) throw new Error('Registration must have at least 16 characters');

    this._registration = newRegistration;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(newSalary: number) {
    if (newSalary < 0) throw new Error('Salary can\'t be a negative number.');

    this._salary = newSalary;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(newDate: Date) {
    if (newDate.getTime() > new Date().getTime()) throw new Error('Admission date cannot be a future date.');

    this._admissionDate = newDate;
  }

  public generateRegistration(): string {
    const randomStr = uuidv4();
    const registrationId = randomStr.substring(0, 13);
    const slicedName = this.name.substring(0, 3);

    return `${slicedName}${registrationId}`;
  }
}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy =  new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);