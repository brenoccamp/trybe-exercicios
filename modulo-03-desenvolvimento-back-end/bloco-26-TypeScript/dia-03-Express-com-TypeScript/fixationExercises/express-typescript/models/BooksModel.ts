import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Book from '../interfaces/BooksInterface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [result] = await this.connection.execute('SELECT * FROM books');
    return result as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
      );

    const { insertId } = result;
    return { id: insertId, ...book };
  }

  public async getById(id: number): Promise<Book> {
    const [[result]] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM books WHERE id = ?', [id]);

    return result as Book;
  }
}
