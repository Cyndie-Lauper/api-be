import Product from "../models/product.model.js";
class productServices {
    async getAllProducts() {
        try {
            const products = await Product.find().populate("category");
            return { success: true, data: products };
        } catch (err) {
            return {
                success: false,
                message: "Server Error",
                error: err.message,
            };
        }
    }
}

export default productServices;
