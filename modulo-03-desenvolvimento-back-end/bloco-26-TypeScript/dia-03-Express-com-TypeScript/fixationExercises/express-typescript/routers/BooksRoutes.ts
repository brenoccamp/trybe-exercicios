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
  validationBook,
  async (req, res, next) => booksController.create(req, res, next),
);

router.put(
  '/books/:id',
  validationBook,
  async (req, res) => booksController.update(req, res),
);

router.delete(
  '/books/:id',
  async (req, res, next) => booksController.delete(req, res, next),
);

export default router;