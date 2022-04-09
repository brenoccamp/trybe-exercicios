class Passenger {
  constructor (public nome:string, public cpf:number) { }
}

class ShippedItem {
  constructor (public nome:string, public id:number, public customerID:string) { }
}

class Flight {
  constructor (public num:number, public passengers:(Passenger | ShippedItem)[]) { }

  Add(newPassenger:Passenger | ShippedItem): void {
    this.passengers.push(newPassenger);
  }

  Remove(removedPassenger: Passenger): void {
    const index = this.passengers.indexOf(removedPassenger, 0);
    if (index > -1) {
      this.passengers.splice(index, 1);
    }
  }
}

interface INewFlight {
  NewFlight(flightNum: number): void;
  AddToFlight(flightNum: number, passenger: Passenger | ShippedItem): void;
}

interface Company extends INewFlight {
  RemoveFromFlight(flightNum: number, passenger: Passenger): void;
}

class TravelingCompany implements Company {
  constructor (public nome:string, public flights:Flight[]) { }

  NewFlight(flightNum: number): void{
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }
  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany implements INewFlight {
  constructor (public nome:string, public flights:Flight[]) { }

  NewFlight(flightNum: number): void{
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }
}