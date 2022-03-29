import connection from '../models/connection';
import User, { newUser } from "../interfaces/UserInterface";
import UserModel from "../models/UserModel";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: newUser): Promise<User> {
    const createdUser = await this.model.create(user);

    return createdUser;
  }

  public async update(id: number, user: newUser): Promise<null|void> {
    const foundUser = await this.model.getById(id);
    if (!foundUser) return null;

    this.model.update(id, user);
    return;
  }
}