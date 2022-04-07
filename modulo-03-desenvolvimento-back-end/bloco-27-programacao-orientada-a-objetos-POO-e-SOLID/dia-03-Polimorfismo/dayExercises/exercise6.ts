import Person from "./exercise1";
import { Student, Teacher } from "./exercise2";
import { Order, OrderItem, PaymentMethod } from "./exercise5";

export class OrderRepository {
  private _orders: Order[];

  constructor(orders: Order[]) {
    this._orders = orders;
  }

  public get orders(): Order[] {
    return this._orders;
  }

  public set orders(newOrders: Order[]) {
    this._orders = newOrders;
  }

  public addOrder(newOrder: Order): void {
    this._orders.push(newOrder);
  }

  public removeOrder(order: Order): void {
    const filteredOrders = this._orders.filter(
      (orderObj) => orderObj.orderedItems !== order.orderedItems
    );

    this.orders = filteredOrders;
  }

  public listByClient(client: Person): Order[] {
    const ordersByClient = this._orders.filter(
      (orderObj) => orderObj.client.name === client.name
    );

    return ordersByClient;
  }

  public listBySortedValue(lessOrGreatherSign: string): void | Order[] {
    if (lessOrGreatherSign === '>') {
      return this._orders.sort((a, b) => a.totalPrice > b.totalPrice ? -1 : 1);
    } else return this._orders.sort((a, b) => a.totalPrice > b.totalPrice ? 1 : -1);
  }
}

const client1 = new Student('Student1', 18);
const client2 = new Teacher('Teacher1', 33, 6000, 'English');

const orderedITem1 = new OrderItem('Sandwich', 5.0);
const orderedItem2 = new OrderItem('Coffe', 3.5);

const orderedItem3 = new OrderItem('Water', 2);
const orderedItem4 = new OrderItem('Lunch', 20);

const orderedItem5 = new OrderItem('Breakfast', 10);
const orderedItem6 = new OrderItem('Coca-cola', 4);

const order1 = new Order(client1, [orderedITem1, orderedItem2], PaymentMethod.Cash);
const order2 = new Order(client2, [orderedItem3, orderedItem4], PaymentMethod.Ticket);
const order3 = new Order(client1, [orderedItem5, orderedItem6], PaymentMethod.Cash);

const repository = new OrderRepository([order1, order2, order3]);

console.log('2: ', repository);
console.log('3: ', repository.listBySortedValue('<'));
console.log('4: ', repository.listByClient(client1));
console.log('5: ', repository);
repository.removeOrder(order1);
console.log('6: ', repository);
repository.addOrder(order1);
console.log('7: ', repository);