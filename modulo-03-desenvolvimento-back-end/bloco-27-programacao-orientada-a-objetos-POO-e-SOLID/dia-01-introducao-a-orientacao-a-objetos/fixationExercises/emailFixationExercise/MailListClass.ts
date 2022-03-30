import Email from './EmailClass';

export default class MailList {
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return this.mailList; }

  public getByEmailFrom(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  public getByEmailTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  public getBySubject(searchString: string): Email[] {
    return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  public addEmail(newMail: Email): void { this.mailList.push(newMail); }

  public removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}