import { connect } from "mongoose";
import dbConfig from "../config/db.conf.js";

const connectDB = async () => {
    try {
        const uri = `${dbConfig.mongoURI}`;
        await connect(uri);

        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB...", err);
        process.exit(1);
    }
};

export default connectDB;
