import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const { name, minRent, maxRent, category } = req.query;
    const books = await BookService.getBooks({
      name: name as string,
      minRent: Number(minRent),
      maxRent: Number(maxRent),
      category: category as string,
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
