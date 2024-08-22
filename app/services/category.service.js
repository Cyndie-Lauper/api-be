import Category from "../models/category.model.js";

const getAllCategories = async () => {
    try {
        const categories = await Category.find();
        return { success: true, data: categories };
    } catch (err) {
        return { success: false, message: "Server Error", error: err.message };
    }
};

export { getAllCategories };
