import { Request, Response } from 'express';
import { TransactionService } from '../services/transactionService';

export const issueBook = async (req: Request, res: Response) => {
  try {
    const { bookId, userId, issueDate } = req.body;
    const result = await TransactionService.issueBook(bookId, userId, new Date(issueDate));
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error issuing book', error });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { bookId, userId, returnDate } = req.body;
    const result = await TransactionService.returnBook(bookId, userId, new Date(returnDate));
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error returning book', error });
  }
};
