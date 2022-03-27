import connection from '../models/connection';
import BookModel from '../models/BooksModel';
import Book from '../interfaces/BooksInterface';

export default class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const newBook = await this.model.create(book);
    return newBook;
  }
}