import { NextFunction, Request, Response } from 'express';
import { newUser } from '../interfaces/UserInterface';
import UserSchema from '../schemas/UserSchema';

function UserValidation(req: Request, res: Response, next: NextFunction): void {
  try {
    const newUser: newUser = req.body;
    const { error } = UserSchema.validate(newUser);

    if (error) return next(error);

    next();
  } catch (err) {
    next(err);
  }
}

export default UserValidation;