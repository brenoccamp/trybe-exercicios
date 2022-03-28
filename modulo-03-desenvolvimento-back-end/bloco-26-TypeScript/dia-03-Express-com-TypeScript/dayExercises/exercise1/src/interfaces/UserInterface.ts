export interface newUser {
  name: string;
  email: string;
  password: string;
}

export interface User extends newUser {
  id: number;
}

export default User;