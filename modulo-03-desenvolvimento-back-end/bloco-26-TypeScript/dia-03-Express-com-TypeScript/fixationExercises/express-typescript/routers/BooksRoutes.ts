import { Router } from 'express';
import BooksController from '../controllers/BooksController';

const router = Router();

const booksController = new BooksController();

router.get(
  '/books',
  async (req, res) => booksController.getAll(req, res),
);

router.get(
  '/books/:id',
  async (req, res) => booksController.getById(req, res),
)

export default router;