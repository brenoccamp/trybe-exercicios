import { NextFunction, Request, Response } from "express";
import User from "../interfaces/UserInterface";
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

  public async getById(req: Request, res: Response, next: NextFunction): Promise<Response|string> {
    const id = Number(req.params.id);
    const user: User = await this.userService.getById(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  }
}