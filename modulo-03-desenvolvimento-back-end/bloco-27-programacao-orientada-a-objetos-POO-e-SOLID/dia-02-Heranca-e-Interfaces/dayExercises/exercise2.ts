import { v4 as uuidv4 } from 'uuid';
import Person from './exercise1';

export default class Student extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    // enrollment: string,
    // examsGrades: number[],
    // worksGrades: number[],
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    // this._examsGrades = examsGrades;
    // this._worksGrades = worksGrades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set enrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) throw new Error('Enrollment must have at least 16 characters.');
    this._enrollment = newEnrollment;
  }

  public set examsGrades(note: any) {
    if (this.examsGrades.length > 4) throw new Error(`Student person only can have 4 exams grades.`);
    if (typeof note === 'number') {
      this._examsGrades.push(note);
    } else throw new Error('Note must be a number.')
  }

  public set worksGrades(note: any) {
    if (this.worksGrades.length > 2) throw new Error(`Student person only can have 2 works grades.`);
    if (typeof note === 'number') {
      this._worksGrades.push(note);
    } else throw new Error('Note must be a number');
  }

  public sumNotes(): number {
    const allGrades = [...this._examsGrades, ...this._worksGrades];

    return allGrades.reduce((acc, currGrade) => {
      acc += currGrade;
      return acc;
    }, 0);
  }

  public sumAverageNotes(): number {
    const allGrades = [...this._examsGrades, ...this._worksGrades];

    return this.sumNotes() / allGrades.length;
  }

  private generateEnrollment(): string {
    const randomEnrollment = uuidv4();
    const enrollment = randomEnrollment.substring(0, 13);
    const sliceName = this.name.substring(0, 3);

    return `${sliceName}${enrollment}`;
  }

  public toString(): string {
    return `${this.name},
    ${this.birthDate},
    ${this._enrollment},
    ${this.examsGrades},
    ${this.worksGrades}`
  }
}

const student1 = new Student('Student 1', new Date());

console.log(student1.enrollment);
console.log(student1.examsGrades);
console.log(student1.worksGrades);
console.log(student1.enrollment = 'Student1-12345678');
console.log(student1.examsGrades = 8);
console.log(student1.worksGrades = 7.5);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());
console.log(student1);