import { Schema, model, Document } from 'mongoose';

interface ITransaction extends Document {
  bookId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  issueDate: Date;
  returnDate: Date | null;
  rentPaid: number;
  createdAt: Date;
  updatedAt: Date;
}

const transactionSchema = new Schema<ITransaction>({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, default: null },
  rentPaid: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Transaction = model<ITransaction>('Transaction', transactionSchema);
