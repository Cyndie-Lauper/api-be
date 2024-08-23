import Product from "../models/product.model.js";

class productServices {
    async getAllProducts() {
        try {
            const products = await Product.find().populate("category");
            return products;
        } catch (err) {
            throw new Error("Failed to fetch products");
        }
    }

    async getProductbyId(id) {
        try {
            const product = await Product.findById(id).populate("category");
            return product;
        } catch (err) {
            throw new Error("Failed to fetch product");
        }
    }

    async createProduct(productData) {
        try {
            const product = await Product.create(productData);
            return product;
        } catch (err) {
            throw new Error("Failed to fetch product");
        }
    }

    async updateProduct(id, updateData) {
        try {
            const product = await Product.findByIdAndUpdate(id, updateData, {
                new: true,
                runValidators: true,
            }).populate("category");
            return product;
        } catch (err) {
            throw new Error("Failed to fetch product");
        }
    }

    async deleteProduct(id) {
        try {
            const product = await Product.findByIdAndDelete(id);
            return product;
        } catch (err) {
            throw new Error("Failed to fetch product");
        }
    }
}

export default productServices;
