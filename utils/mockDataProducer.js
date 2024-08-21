import { Kafka } from 'kafkajs';
import { finance, datatype } from 'faker';

const kafka = new Kafka({
    clientId: 'stock-mock-producer',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const getRandomStockData = () => {
    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];
    return {
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        price: finance.amount(100, 1500, 2),
        volume: datatype.number({ min: 1000, max: 100000 }),
        timestamp: new Date(),
    };
};

const run = async () => {
    await producer.connect();

    setInterval(async () => {
        const stockData = getRandomStockData();
        console.log('Sending data:', stockData);

        await producer.send({
            topic: 'stock-prices',
            messages: [
                { value: JSON.stringify(stockData) },
            ],
        });
    }, 1000);

    setTimeout(async () => {
        await producer.disconnect();
        console.log('Producer disconnected');
        process.exit(0);
    }, 60000);
};

run().catch(console.error);
