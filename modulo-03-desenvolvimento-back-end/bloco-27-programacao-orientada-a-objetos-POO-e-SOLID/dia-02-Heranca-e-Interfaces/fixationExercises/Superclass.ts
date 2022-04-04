class Superclass {
  public isSuper: boolean;

  constructor(isSuper: boolean) {
    this.isSuper = isSuper;
  }

  public sayHello(): void {
    console.log('Hello, world!');
  }
}

class Subclass extends Superclass {

}

const superclass = new Superclass(true);
const subclass = new Subclass(true);

function outSubclass(object: Superclass) {
  object.sayHello();
}

outSubclass(superclass);
outSubclass(subclass);