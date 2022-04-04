interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;

}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;

    return `Total Sum: ${sum}`;
  }
}

const myClass = new MyClass(5);
console.log(myClass.myNumber);
console.log(myClass.myFunc(10));