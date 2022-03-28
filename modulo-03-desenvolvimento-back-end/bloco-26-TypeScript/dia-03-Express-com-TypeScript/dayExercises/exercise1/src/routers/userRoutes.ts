import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController()

router.get(
  '/',
  async (req, res, next) => userController.getAll(req, res, next),
);

router.get(
  '/:id',
  async (req, res, next) => userController.getById(req, res, next),
);

export default router;