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
    registry: string,
    studentName: string,
    testsGrades: testsGrades,
    worksGrades: worksGrades,
  ) {
    this._registry = registry;
    this._studentName = studentName;
    this._testsGrades = testsGrades;
    this._worksGrades = worksGrades;
  }

  public gradesSum(): number {
    let totalSum = 0;
    const allGradesList = this._testsGrades
      .concat(this._worksGrades);

    allGradesList.forEach(
      (grade) => totalSum += grade
    );

    return totalSum;
  }

  public gradesAverage(): number {
    let totalAverage = 0;

    const allGradeList = this._testsGrades
      .concat(this._worksGrades);
    
    allGradeList.forEach(
      (grade) => totalAverage += grade
    );
    []
    return (totalAverage/allGradeList.length);
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