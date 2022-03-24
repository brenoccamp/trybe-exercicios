interface House {
  _color: string;
  _address: string;
  _sizeInMeters: number;
}

class House {
  constructor(color: string, address: string, sizeInMeters: number) {
    this._color = color;
    this._address = address;
    this._sizeInMeters = sizeInMeters;
  }

  isRented(rent: boolean) {
    return `A casa do endereço ${this._address} está ${rent}`;
  }
}