enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

class DateClass {
  private _date: string;

  constructor(
    date: string,
  ) {
    this._date = date;

    const isValidDate = () => {
      const [day, month, year] = this._date.split('/');
      const invalidDay = day.length !== 2 || Number(day) < 1 || Number(day) > 31;
      const invalidMonth = month.length !== 2 || Number(month) < 1 || Number(month) > 12;
      const invalidYear = year.length !== 4 || Number(year) < 0;

      if (invalidDay || invalidMonth || invalidYear) this._date = '01/01/1900';
    }

    isValidDate();
  }

  public get date(): string {
    return this._date;
  }

  public getMonthName(): string {
    const dateMonth = this._date.split('/')[1];
    return Month[Number(dateMonth)];
  }

  public isLeapYear(): boolean {
    const dateYear = Number(this._date.split('/')[2]);
    return dateYear % 100 === 0 ? dateYear % 400 === 0 : dateYear % 4 === 0;
  }

  public compare(date: string): number|void {
    // const [_insertedDay, _insertedMonth, insertedYear] = date.split('/');
    const dateNow = new Date();
    const [curDay, curMonth, curYear] = dateNow.toLocaleDateString().split('/');
    const curDate = `${curDay}/${curMonth}/${curYear}`;
    console.log(Date.parse(date))
    console.log(Date.parse(curDate));
    // console.log('insertedYear', insertedYear, 'curYear', curYear);

    if (date === curDate) return 0;
    if (Date.parse(curDate) < Date.parse(date)) return 1;
    if (Date.parse(curDate) > Date.parse(date)) return -1;
  }
}

const newDate = new DateClass('01/04/2020');
// console.log(newDate.date);
// console.log(newDate.getMonthName());
// console.log(newDate.isLeapYear());
console.log(newDate.compare('2022/03/31'));
// console.log(new Date())
