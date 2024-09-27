import { User } from '../models/user';

export class UserService {
  static async getUsers() {
    return User.find();
  }
}
