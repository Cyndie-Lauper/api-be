import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'stock-producer',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const run = async () => {
    await producer.connect();
    await producer.send({
        topic: 'stock-prices',
        messages: [
            { value: JSON.stringify({ symbol: 'AAPL', price: 150, timestamp: Date.now() }) },
        ],
    });
    await producer.disconnect();
};

run().catch(console.error);
