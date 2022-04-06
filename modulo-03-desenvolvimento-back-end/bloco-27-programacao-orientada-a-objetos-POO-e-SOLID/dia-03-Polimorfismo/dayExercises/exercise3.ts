import { Teacher } from "./exercise2";

enum EvaluationType {
  EXAMS = 'Exams',
  WORKS = 'Works',
}

export default class Evaluation {
  private _score: number;
  private _type: string;
  private _teacher: Teacher;

  constructor(score: number, type: EvaluationType, teacher: Teacher) {
    this.validateScore(type, score);

    this._score = score;
    this._type = type;
    this._teacher = teacher;
  }

  private validateScore(type: EvaluationType|string, score: number): void {
    if (score < 0) throw new Error('Score must be a positive number.');
    else this._score = score;
    if (type === EvaluationType.EXAMS && score > 25) throw new Error('Exam grade cannot be bigger than 25.');
    if (type === EvaluationType.WORKS && score > 50) throw new Error('Work grade cannot be bigger 50.');
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    this.validateScore(this._type, newScore);
    this._score = newScore;
  }

  get type(): string {
    return this._type;
  }

  set type(newType: string) {
    this._type = newType;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(newTeacher: Teacher) {
    this._teacher = newTeacher;
  }
}

export class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.validateScore(evaluation, score);

    this._evaluation = evaluation;
    this._score = score;
  }
  
  private validateScore(evaluation: Evaluation, score: number): void {
    if (score < 0) throw new Error('Score must be a positive number.');
    if (evaluation.type === 'Exams' && score > 25) throw new Error('Score cannot be bigger than 25.');
    if (evaluation.type === 'Works' && score > 50) throw new Error('Score cannot be bigger than 50');
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
    this.validateScore(this._evaluation, newScore);
    this._score = newScore;
  }
}