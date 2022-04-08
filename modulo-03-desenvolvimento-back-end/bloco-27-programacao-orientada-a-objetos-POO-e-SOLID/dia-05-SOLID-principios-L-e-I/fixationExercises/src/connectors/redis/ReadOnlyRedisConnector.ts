// ./src/Connectors/redis/ReadOnlyRedisConnector.ts

import redis, { RedisClient } from 'redis';
import { ConnectorConstructor, ReadOnlyConnector } from '../connector';

export default class RedisConnector implements ReadOnlyConnector {

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
}