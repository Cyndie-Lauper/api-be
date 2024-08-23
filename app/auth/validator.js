import { object, string } from "joi";

const userSchema = object({
    username: string().alphanum().min(3).max(30).required(),
    email: string().email().required(),
    password: string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    role: string().valid("user", "admin"),
});

export function validateCreateUser(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}
