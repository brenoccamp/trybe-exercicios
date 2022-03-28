import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/UserInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM users');
    return result as User[];
  }

  public async getById(id: number): Promise<User> {
    const [[result]] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [id]);
    return result as User;
  }
}