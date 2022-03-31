type testsGrades = [number, number, number, number];
type worksGrades = [number, number];

interface StudentClass {
  gradesSum: () => number;
  gradesAverage: () => number;
}

export default class Student implements StudentClass {
  private _registry: string;
  private _studentName: string;
  private _testsGrades: testsGrades;
  private _worksGrades: worksGrades;

  constructor(
    studentName: string,
    registry: string,
    testsGrades: testsGrades,
    worksGrades: worksGrades,
  ) {
    this._registry = registry;
    this._studentName = studentName;
    this._testsGrades = testsGrades;
    this._worksGrades = worksGrades;
  }

  get studentGrades(): string {
    return `Grades of student ${this._studentName} which has registry "${this._registry}" are:
    Tests grades: ${this._testsGrades};
    Works grades: ${this._worksGrades}`;
  }

  set newGrades(
    newGrades: testsGrades|worksGrades
  ) {
    if (newGrades.length === 4) {
      this._testsGrades = newGrades;
      console.log(`Grades of student ${this._studentName} updated to: ${newGrades}`);
    } else {
      this._worksGrades = newGrades;
      console.log(`Grades of student ${this._studentName} updated to: ${newGrades}`);
    }
  }

  public gradesSum(): number {
    return [...this._testsGrades, ...this._worksGrades]
      .reduce((sum, currentGrade) => {
        return sum += currentGrade;
      }, 0)
  }

  public gradesAverage(): number {
    const totalGradesSum = this.gradesSum();

    const allGradesList = [...this._testsGrades, ...this._worksGrades];
    
    return (totalGradesSum/allGradesList.length);
  }
}

const newStudent = new Student(
  'Breno',
  'Matrícula 1',
  [1, 2, 3, 4],
  [2, 2,],
);

console.log(newStudent.gradesAverage());
console.log(newStudent.gradesSum());
console.log(newStudent.studentGrades);
newStudent.newGrades = [5, 6, 7, 8];
console.log(newStudent.studentGrades);
