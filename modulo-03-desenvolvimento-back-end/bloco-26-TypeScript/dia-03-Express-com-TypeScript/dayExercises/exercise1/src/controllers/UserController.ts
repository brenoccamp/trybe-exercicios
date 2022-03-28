import { NextFunction, Request, Response } from "express";
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const users = await this.userService.getAll();

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}