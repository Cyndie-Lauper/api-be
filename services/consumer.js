const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'stock-consumer',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'stock-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'stock-prices', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const stockData = JSON.parse(message.value.toString());
            console.log(stockData);
        },
    });
};

run().catch(console.error);
