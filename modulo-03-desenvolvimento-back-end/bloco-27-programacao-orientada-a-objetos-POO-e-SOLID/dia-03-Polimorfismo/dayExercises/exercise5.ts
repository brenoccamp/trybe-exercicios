import Person from "./exercise1";

export class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length < 3)
      throw new Error('Name must have more than 3 characters.');

    this._name = newName;
  }

  public get price(): number {
    return this._price;
  }

  public set price(newPrice: number) {
    if (newPrice < 0)
      throw new Error('Price must be a positive number.');

    this._price = newPrice;
  }
}

enum PaymentMethod {
  Cash = 15,
  Card = 10,
  Ticket = 5,
}

export class Order {
  private _client: Person;
  private _orderedItems: OrderItem[];
  private _paymentMethod: PaymentMethod;
  private _discount: number;

  constructor(client: Person, orderedItems: OrderItem[], paymentMethod: PaymentMethod, discount: number) {
    this._client = client;
    this._orderedItems = orderedItems;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client(): Person {
    return this._client;
  }

  public set client(newClient: Person) {
    this._client = newClient;
  }

  public get orderedItems(): OrderItem[] {
    return this._orderedItems;
  }

  public set orderedItems(newOrderedItems: OrderItem[]) {
    this._orderedItems = newOrderedItems;
  }

  public get paymentMethod(): PaymentMethod {
    return this._paymentMethod;
  }

  public set paymentMethod(newPaymentMethod: PaymentMethod) {
    this._paymentMethod = newPaymentMethod;
  }

  public get discount(): number {
    return this._discount;
  }

  public set discount(newDiscount: number) {
    if (newDiscount < 0) throw new Error('Discount cannot be a negative number.');
    this._discount = newDiscount;
  }
}