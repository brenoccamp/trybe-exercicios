class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length < 3) throw new Error('Name must be longer than 3 characters.');

    this._name = newName;
  }
}

class OrderedItem {
  _itemName: string;
  _price: number;

  constructor(item: string, price: number) {
    this._itemName = item;
    this._price = price;
  }
}

class Order {
  _client: string;
  _paymentMethod: string;
  _percentDiscount: number;

  constructor(client: string, paymentMethod: string, percentDiscount: number) {
    this._client = client;
    this._paymentMethod = paymentMethod;
    this._percentDiscount = percentDiscount;
  }
}