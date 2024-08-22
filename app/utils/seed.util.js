import mongoose from "mongoose";
import connectDB from "../databases/mongo.database.js";
import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

const data = async () => {
    try {
        await connectDB();

        await User.deleteMany({});
        await Product.deleteMany({});
        await Category.deleteMany({});

        const categories = await Category.create([
            {
                name: "Electronics",
                description: "Electronic devices and accessories",
            },
            { name: "Clothing", description: "Men and Women clothing" },
            { name: "Books", description: "Various genres of books" },
        ]);

        await Product.create([
            {
                name: "Smartphone",
                price: 699,
                category: categories[0]._id,
                description: "A high-end smartphone with a large display",
            },
            {
                name: "Laptop",
                price: 1299,
                category: categories[0]._id,
                description: "A powerful laptop for professionals",
            },
            {
                name: "T-shirt",
                price: 29,
                category: categories[1]._id,
                description: "Comfortable cotton T-shirt",
            },
            {
                name: "Jeans",
                price: 49,
                category: categories[1]._id,
                description: "Stylish jeans with a modern cut",
            },
            {
                name: "Novel",
                price: 15,
                category: categories[2]._id,
                description: "An intriguing novel with a gripping story",
            },
        ]);

        await User.create([
            {
                username: "admin",
                email: "ad@gm.com",
                password: "admin123",
                role: "admin",
            },
            {
                username: "minh",
                email: "minh@gm.com",
                password: "password123",
                role: "user",
            },
        ]);

        console.log("Dữ liệu mẫu đã được thêm vào MongoDB");
    } catch (err) {
        console.error("Lỗi khi thêm dữ liệu:", err);
    } finally {
        mongoose.connection.close();
    }
};

data();
