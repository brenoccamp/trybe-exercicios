import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController()

router.use(
  '/',
  async (req, res, next) => userController.getAll(req, res, next),
);

export default router;