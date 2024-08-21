import { Op } from 'sequelize';
import Account from '../models/account.model';
import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';
const saltRounds = 10;

export async function getAllAccounts(req, res) {
    try {
        const accounts = await Account.findAll();
        res.json(accounts);
    } catch (error) {
        console.error('Error while getting accounts: ', error);
        res.status(500).json({ error: 'Error while getting accounts' });
    }
}

export async function addAccount(req, res) {
    try {
        const { username, password, position } = req.body;
        const hashedPassword = await hash(password, saltRounds);
        const newAccount = await Account.create({ username, password: hashedPassword, position });
        res.status(201).json({ message: 'Add account success', account: newAccount });
    } catch (error) {
        console.error('Error while adding account: ', error);
        res.status(404).json({ error: 'Error while adding account' });
    }
}

export async function deleteAccount(req, res) {
    try {
        const { id } = req.params;
        const deleteAccount = await Account.destroy({ where: { id: id } });
        if (deleteAccount) {
            res.status(200).json({ message: 'Account deleted successfully' });
        } else {
            res.status(404).json({ error: 'Account not found' });
        }
    } catch (error) {
        console.error('Error while deleting account: ', error);
        res.status(500).json({ error: 'Error while deleting account' });
    }
}

export async function updateAccount(req, res) {
    const accountId = req.params.id;
    const { username, password, position } = req.body;

    try {
        const hashedPassword = password ? await hash(password, saltRounds) : undefined;
        const updateData = { username, position };
        if (hashedPassword) {
            updateData.password = hashedPassword;
        }
        const updatedAccount = await Account.update(
            updateData,
            { where: { id: accountId } }
        );

        if (updatedAccount[0] === 1) {
            res.status(200).json({ message: 'Account updated successfully' });
        } else {
            res.status(404).json({ error: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function login(req, res) {
    const { username, password } = req.body;
    try {
        const account = await Account.findOne({ where: { username: username } });
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        const match = await compare(password, account.password);
        if (!match) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        const token = sign(
            { id: account.id, username: account.username, position: account.position },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ message: 'Login successful', token: token, position: account.position });
    } catch (error) {
        console.error('Error while logging in: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getAccountById(req, res) {
    try {
        const accountId = req.params.id;
        const account = await Account.findByPk(accountId);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        console.error('Error while getting account by id:', error);
        res.status(500).json({ error: 'Error while getting account' });
    }
}


export async function getAccountsByUsername(req, res) {
    const { username } = req.params;

    try {
        const accounts = await Account.findAll({
            where: {
                username: {
                    [Op.like]: `%${username}%`
                }
            }
        });

        res.status(200).json(accounts);
    } catch (error) {
        console.error('Error while getting accounts by username:', error);
        res.status(500).json({ error: 'Error while getting accounts by username' });
    }
}
