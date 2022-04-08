// ./src/index.ts

import { Connector, RedisConnector } from "./connectors";

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new RedisConnector({
  host: 'redisdb',
  port: 6379});

// O resto do index.ts continua igualzinho 😎