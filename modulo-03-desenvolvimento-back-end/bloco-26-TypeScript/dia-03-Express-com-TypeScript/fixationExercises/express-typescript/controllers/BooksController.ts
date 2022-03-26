import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/BooksService';

export default class BooksController {
  constructor(private bookService = new BookService()) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const books = await this.bookService.getAll();
    return res.status(StatusCodes.OK).json(books);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const book = await this.bookService.getById(+id);

    if (!book) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found' });

    return res.status(StatusCodes.OK).json(book);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    return res.status(StatusCodes.CREATED).json(bookCreated);
  }
}