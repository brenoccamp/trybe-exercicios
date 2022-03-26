import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/bookInterface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [result] = await this.connection.execute('SELET * FROM books');
    return result as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, author, price, isbn } = book;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, author, price, isbn]
    );

    const { insertId } = result;
    return { id: insertId, ...book };
  }
}
