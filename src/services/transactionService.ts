import { Transaction } from '../models/transaction';
import { Book } from '../models/book';

export class TransactionService {
    static async issueBook(bookId: string, userId: string, issueDate: Date) {
        const book = await Book.findById(bookId);
        if (!book || book.isIssued) throw new Error('Book not available');

        const transaction = new Transaction({ bookId, userId, issueDate });
        await transaction.save();

        book.isIssued = true;
        await book.save();

        return transaction;
    }

    static async returnBook(bookId: string, userId: string, returnDate: Date) {
        const transaction = await Transaction.findOne({ bookId, userId, returnDate: null });
        if (!transaction) throw new Error('No active issue found for this book and user');
        const daysRented = Math.ceil((returnDate.getTime() - transaction.issueDate.getTime()) / (1000 * 60 * 60 * 24));
        const book = await Book.findById(bookId);
        if (!book) throw new Error('Book not found');
        const rent = daysRented * book.rentPerDay;
        transaction.returnDate = returnDate;
        transaction.rentPaid = rent;
        await transaction.save();

        await Book.findByIdAndUpdate(bookId, { isIssued: false });

        return { rentPaid: rent };
    }
}
