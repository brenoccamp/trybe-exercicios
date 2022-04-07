import Person from "./exercise1";
import { Enrollable } from "./interfaces";
import { v4 as uuidv4 } from 'uuid';
import { EvaluationResult } from "./exercise3";

export default class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, age: number, salary: number) {
    if (age < 18) throw new Error('An employee must be of age.');
    super(name, age);
    if (salary < 1) throw new Error('Salary must be a positive number.');
    else this._salary = salary;

    this._enrollment = this.generateEnrollment();
    this._admissionDate = new Date();
  }

  public generateEnrollment(): string {
    const randomStr = uuidv4();
    const randomId = randomStr.substring(0, 13);
    const slicePersonName = this.name.substring(0, 3);

    return `${slicePersonName}${randomId}`
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) throw new Error('Enrollment must have at least 16 characters.');
    this._enrollment = newEnrollment;
  }

  set age(newAge: number) {
    if (newAge < 18) throw new Error('An employee must be of age.');
    super.age = newAge;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(newValue: number) {
    if (newValue < 1) throw new Error('Salary must be a positive number.');
    this._salary = newValue;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(newDate: Date) {
    const nowDate = new Date().getTime();
    if (newDate.getTime() > nowDate) throw new Error('New admission date cannot be a future date.');

    this._admissionDate = newDate;
  }
}

export class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, age: number) {
    super(name, age);

    this._enrollment = this.generateEnrollment();
  }

  public generateEnrollment(): string {
    const randomStr = uuidv4();
    const randomId = randomStr.substring(0, 13);
    const slicePersonName = this.name.substring(0, 3);

    return `${randomId}${slicePersonName}`
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) throw new Error('Enrollment must have at least 16 characters.');
    this._enrollment = newEnrollment;
  }

  public sumNotes(): number {
    return this._evaluationsResults.reduce((acc, currEvaluation) => acc += currEvaluation.score, 0);
  }

  public sumAverageNotes(): number {
    return this.sumNotes() / this._evaluationsResults.length;
  }
}

export class Teacher extends Employee {
  private _subject: string;

  constructor(name: string, age: number, salary: number, subject: string) {
    super(name, age, salary);

    this._subject = subject;
  }

  public get subject(): string {
    return this._subject;
  }

  public set subject(newSubject: string) {
    this._subject = newSubject;
  }
}

// const student1 = new Student('Student1', 13);
// const student2 = new Student('Student2', 20);
// console.log(student1);
// console.log(student2);

// const teacher1 = new Teacher('Teacher1', 20, 5000.00, 'Math');
// const teacher2 = new Teacher('Teacher2', 33, 5500.00, 'English');
// console.log(teacher1.enrollment = '12345678901234567');
// console.log(teacher2);
// console.log(teacher1);