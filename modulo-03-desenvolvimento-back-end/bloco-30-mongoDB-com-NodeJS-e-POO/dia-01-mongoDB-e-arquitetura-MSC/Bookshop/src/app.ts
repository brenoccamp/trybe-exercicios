  // src/app.ts

  import express from 'express';
  import routes from './routes';
  import createConnection from './models/connection';

  class App {
    public express: express.Application;


    constructor() {
      this.express = express();
      this.middlewares();
      this.routes();

      createConnection();
    }

    private middlewares(): void {
      this.express.use(express.json());
    }

    private routes() {
      this.express.use(routes);
    }
  }

  export default App;