import Category from "../models/category.model.js";

class categoryService {
    async getAllCategory() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (err) {
            throw new Error("Failed to fetch categories");
        }
    }

    async getCategoryById(id) {
        try {
            const category = await Category.findById(id);
            return category;
        } catch (err) {
            throw new Error("Failed to fetch category");
        }
    }

    async createCategory(categoryData) {
        try {
            const category = await Category.create(categoryData);
            return category;
        } catch (err) {
            throw new Error("Failed to fetch category");
        }
    }

    async updateCategory(id, updateData) {
        try {
            const category = await Category.findByIdAndUpdate(id, updateData, {
                new: true,
                runValidators: true,
            });
            return category;
        } catch (err) {
            throw new Error("Failed to fetch category");
        }
    }

    async deleteCategory(id) {
        try {
            const category = await Category.findByIdAndDelete(id);
            return category;
        } catch (err) {
            throw new Error("Failed to fetch category");
        }
    }
}

export default categoryService;
