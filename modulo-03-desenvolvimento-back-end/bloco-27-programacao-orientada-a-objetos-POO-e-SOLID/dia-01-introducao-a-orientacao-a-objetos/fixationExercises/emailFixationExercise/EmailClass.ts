class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor (
    from: string,
    to: string,
    message: string,
    subject: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = '';
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    return `From ${this._from} to ${this._to}:
    ${this._subject}
    ${this._message}`;
  }
}

const email = new Email('breno', 'trybe', 'Great content', 'Course');

email.content;