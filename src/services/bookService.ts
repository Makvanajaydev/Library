import { Book } from '../models/book';

interface BookQuery {
  name?: string;
  minRent?: number;
  maxRent?: number;
  category?: string;
}

export class BookService {
  static async getBooks(query: BookQuery) {
    const searchQuery: any = {};
    if (query.name) searchQuery.name = new RegExp(query.name, 'i');
    if (query.minRent || query.maxRent) searchQuery.rentPerDay = { $gte: query.minRent || 0, $lte: query.maxRent || Number.MAX_VALUE };
    if (query.category) searchQuery.category = query.category;

    return Book.find(searchQuery);
  }
}
