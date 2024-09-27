import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
