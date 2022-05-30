// models/BookModel.ts

import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IBook, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }
}

export default BookModel;