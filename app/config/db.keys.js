import dotenv from "dotenv";

dotenv.config();

const dbKeys = {
    mongoUser: process.env.MONGODB_USERNAME,
    mongoPassword: process.env.MONGODB_PASSWORD,
    mongoCluster: process.env.MONGODB_CLUSTER,
    mongoName: process.env.MONGODB_DBNAME,
};

export default dbKeys;
