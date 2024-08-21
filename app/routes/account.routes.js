import { Router } from 'express';
const router = Router();
import { getAllAccounts, addAccount, deleteAccount, updateAccount, login, getAccountById, getAccountsByUsername } from '../controllers/account.controller';

router.get('/accounts', getAllAccounts);

router.post('/accounts', addAccount);

router.delete('/accounts/:id', deleteAccount);

router.put('/accounts/:id', updateAccount);

router.post('/login', login);

router.get('/accounts/:id', getAccountById);

router.get('/accounts/username/:username', getAccountsByUsername);

export default router;
