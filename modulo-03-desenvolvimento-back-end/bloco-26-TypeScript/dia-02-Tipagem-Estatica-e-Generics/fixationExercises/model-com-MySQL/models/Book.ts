import { Pool } from 'mysql2/promise';

export default class Book {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const [result] = await this.connection.execute('SELECT * FROM books');
    return result;
  }
}