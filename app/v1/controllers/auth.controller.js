import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.model.js";

export async function login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res
            .status(401)
            .json({ message: "Incorrect username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res
            .status(401)
            .json({ message: "Incorrect username or password" });
    }

    const token = jsonwebtoken.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
}
