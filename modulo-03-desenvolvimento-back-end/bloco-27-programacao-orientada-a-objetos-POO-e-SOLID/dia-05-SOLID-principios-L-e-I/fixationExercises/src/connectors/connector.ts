// .src/Connectors/Connector.ts

export interface Connector {
  getCount(token: string): number | Promise<number>;

  incrementCount(token: string): void;
  
  closeConnection(): void;

  clearCount(token: string): void;

  firstCount(token: string): void;
}

export interface ConnectorConstructor {
  host: string;
  port: number;
  database?: string;
  user?: string;
  password?: string;
}

export default Connector;