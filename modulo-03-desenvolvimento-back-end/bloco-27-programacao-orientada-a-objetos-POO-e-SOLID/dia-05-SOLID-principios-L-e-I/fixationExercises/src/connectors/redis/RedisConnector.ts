// ./src/Connectors/redis/RedisConnector.ts

import redis, { RedisClient } from 'redis';
import Connector, { ConnectorConstructor } from '../connector';

export default class RedisConnector implements Connector {

  protected client: RedisClient;

  constructor(config: ConnectorConstructor) {
    this.client = redis.createClient(config);
    return this;
  }

  public async getCount(token: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.get(token, (error, reply) => {
        if (error) reject(error);
        else resolve(parseInt(reply as string, 10));
      });
    });
  }

  public closeConnection(): void {
    this.client.quit();
  }

  public incrementCount(token: string): void {
    this.client.incr(token);
  }

  public clearCount(token: string): void {
    this.client.set(token, '0');
  }

  public firstCount = this.clearCount;
}