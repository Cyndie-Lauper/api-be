import User from "../models/user.model.js";

class userServices {
    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return { success: true, data: user };
        } catch (err) {
            return {
                success: false,
                message: "Server Error",
                error: err.message,
            };
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findById(id).select("-password");
            if (!user) {
                return { success: false, message: "User not found" };
            }
            return { success: true, data: user };
        } catch (err) {
            return {
                success: false,
                message: "Server Error",
                error: err.message,
            };
        }
    }

    async updateUser(id, updateData) {
        try {
            const user = await User.findByIdAndUpdate(id, updateData, {
                new: true,
                runValidators: true,
            }).select("-password");
            if (!user) {
                return { success: false, message: "User not found" };
            }
            return { success: true, data: user };
        } catch (err) {
            return {
                success: false,
                message: "Server Error",
                error: err.message,
            };
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return { success: false, message: "User not found" };
            }
            return { success: true, message: "User deleted successfully" };
        } catch (err) {
            return {
                success: false,
                message: "Server Error",
                error: err.message,
            };
        }
    }
}

export default userServices;
