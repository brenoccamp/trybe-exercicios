// ./src/Connectors/redis/RedisConnector.ts

import Connector from '../connector';
import ReadOnlyRedisConnector from './ReadOnlyRedisConnector';

export default class RedisConnector extends ReadOnlyRedisConnector implements Connector {

  public incrementCount(token: string): void {
    this.client.incr(token);
  }

  public clearCount(token: string): void {
    this.client.set(token, '0');
  }

  public firstCount = this.clearCount;
}