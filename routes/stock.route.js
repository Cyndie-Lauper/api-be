import { Router } from 'express';
const router = Router();
import Stock, { find, findByIdAndUpdate, findByIdAndDelete } from '../models/stock.model';

router.get('/realtime', async (req, res) => {
    const stocks = await find().sort({ timestamp: -1 }).limit(10);
    res.json(stocks);
});

router.get('/history', async (req, res) => {
    const stocks = await find().sort({ timestamp: -1 });
    res.json(stocks);
});

router.post('/stock', async (req, res) => {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
});

router.put('/stock/:id', async (req, res) => {
    const stock = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(stock);
});

router.delete('/stock/:id', async (req, res) => {
    await findByIdAndDelete(req.params.id);
    res.status(204).send();
});

export default router;
