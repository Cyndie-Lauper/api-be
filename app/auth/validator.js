import joi from "joi";

const userSchema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    role: joi.string().valid("user", "admin"),
});

export function validateCreateUser(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}
