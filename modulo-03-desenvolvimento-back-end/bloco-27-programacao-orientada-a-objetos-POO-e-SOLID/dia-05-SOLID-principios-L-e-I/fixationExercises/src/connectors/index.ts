// ./src/Connectors/index.ts

import Connector, { ConnectorConstructor } from "./connector";
import MySQLConnector from "./mysql/MySQLConnector";
import RedisConnector from "./redis/RedisConnector";

export default Connector;
export {
  Connector,
  ConnectorConstructor,
  MySQLConnector,
  RedisConnector
};