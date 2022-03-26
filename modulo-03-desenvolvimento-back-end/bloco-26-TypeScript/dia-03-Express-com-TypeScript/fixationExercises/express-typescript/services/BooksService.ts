import connection from '../models/connection';
import BookModel from '../models/BookModel';
import Book from '../interfaces/bookInterface';

export default class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }
}