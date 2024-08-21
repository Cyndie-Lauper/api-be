const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/stock.route');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/stockdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api', stockRoutes);

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('getStockData', (stockData) => {
        io.emit('stockData', stockData);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
