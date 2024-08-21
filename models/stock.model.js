import { Schema, model } from 'mongoose';

const stockSchema = new Schema({
    symbol: String,
    price: Number,
    volume: Number,
    timestamp: Date,
});

const Stock = model('Stock', stockSchema);
export default Stock;
