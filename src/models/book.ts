import { Schema, model, Document } from 'mongoose';

interface IBook extends Document {
  name: string;
  category: string;
  rentPerDay: number;
  isIssued: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new Schema<IBook>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  rentPerDay: { type: Number, required: true },
  isIssued: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Book = model<IBook>('Book', bookSchema);
