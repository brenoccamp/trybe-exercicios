import { v4 as uuidv4 } from 'uuid';
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

export enum PaymentMethod {
  Cash = 15,
  Card = 10,
  Ticket = 5,
}

export class Order {
  private _id: string;
  private _createdAt: Date;
  private _client: Person;
  private _orderedItems: OrderItem[];
  private _paymentMethod: PaymentMethod;
  private _discount: number;
  private _totalPrice: number;

  constructor(client: Person, orderedItems: OrderItem[], paymentMethod: PaymentMethod) {
    this.validateOrderedItems(orderedItems);

    this._client = client;
    this._id = this.generateRandomId();
    this._createdAt = new Date();
    this._orderedItems = orderedItems;
    this._paymentMethod = paymentMethod;
    this._discount = paymentMethod;

    this._totalPrice = this.calcTotalPrice();
  }

  private generateRandomId(): string {
    const randomStr = uuidv4();
    const randomId = randomStr.substring(0, 13);
    const slicePersonName = this._client.name.substring(0, 3);

    return `${randomId}${slicePersonName}`
  }

  private validateOrderedItems(orderedItems: OrderItem[]): void {
    if (orderedItems.length <= 0) throw new Error('Ordered items cannot have length less than 1.');
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
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
    this.validateOrderedItems(newOrderedItems);
    this._orderedItems = newOrderedItems;
    this.calcTotalPrice();
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

  public get totalPrice(): number {
    return this._totalPrice;
  }

  public calcTotalPrice(): number {
    return this.orderedItems.reduce(
      (acc, currItem) => acc += currItem.price, 0
    );
  }

  public calcTotalPriceWithDiscount(): number {
    console.log(this.discount);
    return this.calcTotalPrice() - ((this.discount/100) * this.calcTotalPrice());
  }
}