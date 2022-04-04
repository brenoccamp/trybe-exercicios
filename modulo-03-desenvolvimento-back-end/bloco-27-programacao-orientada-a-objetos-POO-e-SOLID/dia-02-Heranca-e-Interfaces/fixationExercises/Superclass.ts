class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Hello, world!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    // this.isSuper = false;
  }
}

const superclass = new Superclass();
const subclass = new Subclass();

function myFunc(object: Superclass) {
  object.sayHello();
  console.log(object.isSuper ? 'Super!': 'Sub!');
}

myFunc(superclass);
myFunc(subclass);