export default class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor (
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    // this._subject = ''; -> Não entendi a necessidade dessa linha
    this._message = message;
    this._subject = subject;
  }

  public set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  public get subject(): string {
    return this._subject;
  }

  public get from(): string { return this._from; }

  public get to(): string { return this._to; }

  public get content(): string {
    return `From ${this._from} to ${this._to}:
    ${this._subject}
    ${this._message}`;
  }
}

// const email = new Email('breno', 'trybe', 'Great content', 'Course');