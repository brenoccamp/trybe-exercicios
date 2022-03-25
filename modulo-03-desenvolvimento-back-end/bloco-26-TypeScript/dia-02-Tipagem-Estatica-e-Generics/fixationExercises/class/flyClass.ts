interface Fly {
  company: string,
  departure: number,
  arrive: number,
  flyNumber: number,
}

class Fly {
  constructor(company: string, departure: number, arrive: number, flyNumber: number) {
    this.company = company;
    this.departure = departure;
    this.arrive = arrive;
    this.flyNumber = flyNumber;
  }
}