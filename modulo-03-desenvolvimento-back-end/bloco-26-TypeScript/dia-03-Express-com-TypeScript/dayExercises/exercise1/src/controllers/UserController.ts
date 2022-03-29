import { NextFunction, Request, Response } from "express";
import User, { newUser } from "../interfaces/UserInterface";
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

  public async getById(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const id = Number(req.params.id);
      const user: User = await this.userService.getById(id);
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const newUser: newUser = req.body;
      const createdUser = await this.userService.create(newUser);

      return res.status(201).json(createdUser);
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const id = Number(req.params.id);
      const user: newUser = req.body;

      const updatedUser = await this.userService.update(id, user);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });

      return res.status(201).json({ id, ...user });
    } catch (err) {
      next(err);
    }
  }
}