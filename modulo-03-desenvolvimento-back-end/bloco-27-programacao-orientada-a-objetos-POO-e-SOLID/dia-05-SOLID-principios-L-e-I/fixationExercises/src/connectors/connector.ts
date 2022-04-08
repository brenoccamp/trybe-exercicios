// ./src/Connectors/Connector.ts

export interface ReadOnlyConnector {
  getCount(token: string): number | Promise<number>;

  closeConnection(): void;
}

export interface Connector extends ReadOnlyConnector {
  incrementCount(token: string): void;

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