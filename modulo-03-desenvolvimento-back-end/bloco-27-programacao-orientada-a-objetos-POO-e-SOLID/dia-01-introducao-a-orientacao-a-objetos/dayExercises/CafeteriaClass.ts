interface ClientClass {
  get name(): string;
  set name(newName: string);
}

class Client implements ClientClass {
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

type Item = {
  name: string;
  price: number;
}

class OrderedItem {
  private _item: Item

  constructor(item: Item) {
    this._item = item;
  }

  get orderedItem(): Item {
    return this._item;
  }

  set orderedItem(newOrder: Item) {
    this._item = newOrder;
  }
}

interface OrderClass {
  orderTotalCost(): number;
  totalCostWithDiscount(percentDiscount: number): number;
}

enum PaymentMethod {
  Cash = 15,
  CreditCard = 10,
  Check = 5,
}

class Order implements OrderClass{
  private _client: string;
  private _consumedItems: Item[];
  private _paymentMethod: PaymentMethod;

  constructor(
    client: string,
    consumedItems: Item[],
    paymentMethod: PaymentMethod, 
  ) {
    this._client = client;
    this._consumedItems = consumedItems;
    this._paymentMethod = paymentMethod;
  }

  set paymentMethod(newPaymentMethod: number) {
    this._paymentMethod = newPaymentMethod;
  }

  public orderTotalCost(): number {
    return this._consumedItems.reduce(
      (totalCost, { price }) => {
        totalCost += price;
        return totalCost;
      }, 0);
  }

  public totalCostWithDiscount(): number {
    const totalCost = this.orderTotalCost();
    const discount = (this._paymentMethod/100)*totalCost;
    return totalCost - discount;
  }
}

const pizza = new OrderedItem({name: 'Pizza', price: 60.00});

const newOrder = new Order(
  'Breno',
  [pizza.orderedItem, pizza.orderedItem = {name: 'Juice', price: 5.00}],
  PaymentMethod.Cash,
);

console.log(newOrder.totalCostWithDiscount());