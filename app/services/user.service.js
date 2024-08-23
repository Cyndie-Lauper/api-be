import User from "../models/user.model.js";

class userServices {
    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }

    async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findById(id).select("-password");
            return user;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }

    async updateUser(id, updateData) {
        try {
            const user = await User.findByIdAndUpdate(id, updateData, {
                new: true,
                runValidators: true,
            }).select("-password");
            return user;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByIdAndDelete(id);
            return user;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }
}

export default userServices;
