import { Teacher } from "./exercise2";

export default abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private static count: number = 0;

  public abstract type: string;

  constructor(score: number, teacher: Teacher) {
    this._score = score;
    this._teacher = teacher;

    Evaluation.addCount();
  }

  private static addCount(): void {
    Evaluation.count += 1;
  }

  public get count(): number {
    return Evaluation.count;
  }

  public get score(): number {
    return this._score;
  }

  public set score(newScore: number) {
    if (newScore < 0) throw new Error('Note cannot be smaller than 0.');
    this._score = newScore;
  };

  public get teacher(): Teacher {
    return this._teacher;
  }

  public set teacher(newTeacher: Teacher) {
    this._teacher = newTeacher;
  };
}

export class Exam extends Evaluation {
  public type: string;

  constructor(score: number, teacher: Teacher) {
    if (score < 0 || score > 25)
      throw new Error('Exam note must be a positive number and cannot be bigger than 25.');

    super(score, teacher);

    this.score = score;

    this.type = 'Exam';
  }

  public get score(): number {
    return super.score;
  }

  public set score(newScore: number) {
    if (newScore > 25) throw new Error('Exam note cannot be bigger than 25.');
    super.score = newScore;
  }
}

export class Work extends Evaluation {
  public type: string;

  constructor(score: number, teacher: Teacher) {
    if (score < 0 || score > 50)
      throw new Error('Exam note must be a positive number and cannot be bigger than 50.');

    super(score, teacher);

    this.type = 'Work';
  }

  public get score(): number {
    return super.score;
  }

  public set score(newScore: number) {
    if (newScore > 50) throw new Error('Work note cannot be bigger than 50.');
    super.score = newScore;
  }
}

export class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  public get evaluation(): Evaluation {
    return this._evaluation;
  }

  public set evaluation(newEvaluation: Evaluation) {
    this._evaluation = newEvaluation;
  }

  public get score(): number {
    return this._score;
  }

  public set score(newScore: number) {
    this.validateScore(newScore);
    this._score = newScore;
  }

  private validateScore(score: number): void {
    if (score < 0 || score > this.evaluation.score)
      throw new Error(
        `Score must be between 0 and ${this._evaluation.score}`
      );
  }
}

const teacher1 = new Teacher('Teacher1', 25, 5000.0, 'Math');
const teacher2 = new Teacher('Teacher2', 35, 6500.0, 'Philosophy');

const evaluation1 = new Exam(10, teacher1);
const evaluation2 = new Work(8, teacher2);

const evaluationResult1 = new EvaluationResult(evaluation1, 8.5);
const evaluationResult2 = new EvaluationResult(evaluation2, 8);

console.log(evaluationResult1);
evaluationResult1.score = 4;
console.log(evaluationResult1);
evaluationResult1.score = 11;
console.log(evaluationResult1);

