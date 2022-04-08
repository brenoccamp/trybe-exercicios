// ./src/Connectors/index.ts

import Connector, { ReadOnlyConnector, ConnectorConstructor } from "./connector";
import MySQLConnector from "./mysql/MySQLConnector";
import ReadOnlyRedisConnector from "./redis/ReadOnlyRedisConnector";
import RedisConnector from "./redis/RedisConnector";

export default Connector;
export {
  Connector,
  ConnectorConstructor,
  MySQLConnector,
  RedisConnector,
  ReadOnlyRedisConnector,
  ReadOnlyConnector
};