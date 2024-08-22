import { compare, hash } from "bcrypt";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return compare(candidatePassword, this.password);
};

export default model("User", userSchema);
