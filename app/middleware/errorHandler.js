import dotenv from "dotenv";

dotenv.config();

export default (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "An unexpected error occurred",
        error: process.env.NODE_ENV === "development" ? {} : err,
    });
};