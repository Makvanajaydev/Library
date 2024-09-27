import { Router } from 'express';
import { issueBook, returnBook } from '../controllers/transactionController';

const router = Router();

router.post('/issue', issueBook);
router.post('/return', returnBook);

export default router;
