interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  constructor() {}

  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 extends ConsoleLogger {
  log2(param: string): void {
    console.log('logger2', param);
  }
};

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Saving ${value} on ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const d1 = new ExampleDatabase(logger1);
const d2 = new ExampleDatabase(logger2);
const d3 = new ExampleDatabase();

d1.save('key 1', 'value 1');
d1.save('key 2', 'value 2');
d1.save('key 3', 'value 3');

