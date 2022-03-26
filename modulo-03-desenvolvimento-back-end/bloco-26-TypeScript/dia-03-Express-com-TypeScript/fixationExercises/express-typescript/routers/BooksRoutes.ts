import { Router } from 'express';
import BooksController from '../controllers/BooksController';
import validationBook from '../middlewares/BooksMiddleware';

const router = Router();

const booksController = new BooksController();

router.get(
  '/books',
  async (req, res) => booksController.getAll(req, res),
);

router.get(
  '/books/:id',
  async (req, res) => booksController.getById(req, res),
);

router.post(
  '/books',
  async (req, res, next) => {
    validationBook(req, res, next);
    booksController.create(req, res);
});

export default router;