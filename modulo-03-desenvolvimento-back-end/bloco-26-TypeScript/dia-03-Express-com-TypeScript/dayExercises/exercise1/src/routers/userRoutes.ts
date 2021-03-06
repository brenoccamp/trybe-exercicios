import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserValidation from '../middlewares/UserValidation';

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

router.post(
  '/',
  UserValidation,
  async (req, res, next) => userController.create(req, res, next),
);

router.put(
  '/:id',
  UserValidation,
  async (req, res, next) => userController.update(req, res, next),
);

router.delete(
  '/:id',
  async (req, res, next) => userController.delete(req, res, next),
);

export default router;