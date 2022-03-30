export default class Student {
  private _registry: string;
  private _name: string;
  private _testsGrade: number[];
  private _worksGrade: number[];

  constructor(
    registry: string,
    name: string,
    testsGrade: number[],
    worksGrade: number[],
  ) {
    this._registry = registry;
    this._name = name;
    this._testsGrade = testsGrade;
    this._worksGrade = worksGrade;
  }

  public gradesSum(): number {
    let totalSum = 0;
    const allGradesList = this._testsGrade
      .concat(this._worksGrade);

    allGradesList.forEach(
      (grade) => totalSum += grade
    );

    return totalSum;
  }

  public gradesAverage(): number {
    let totalAverage = 0;

    const allGradeList = this._testsGrade
      .concat(this._worksGrade);
    
    allGradeList.forEach(
      (grade) => totalAverage += grade
    );

    return (totalAverage/allGradeList.length);
  }
}