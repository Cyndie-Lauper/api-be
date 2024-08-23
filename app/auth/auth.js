import dotenv from "dotenv";
import { verify } from "jsonwebtoken";

dotenv.config();

export function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Authentication token not found" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
}

export function authorize(roles = []) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "No access" });
        }
        next();
    };
}
